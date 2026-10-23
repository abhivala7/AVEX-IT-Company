const Contact = require('../models/Contact')
const { randomUUID } = require('crypto')
const { sendInquiryNotification } = require('../config/mailer')

exports.handleContact = async (req, res) => {
  try {
    const { name = '', email = '', subject = '', company = '', projectType = '', message = '' } = req.body || {}
    const fields = { name, email, subject, company, projectType, message }
    if (Object.values(fields).some((value) => typeof value !== 'string')) {
      return res.status(400).json({ success: false, message: 'All fields must contain text.' })
    }

    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      company: company.trim(),
      projectType: projectType.trim(),
      message: message.trim(),
    }
    const suppliedId = req.get('Idempotency-Key')
    if (suppliedId && !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(suppliedId)) {
      return res.status(400).json({ success: false, message: 'Please refresh the form and try again.' })
    }
    const submissionId = suppliedId || randomUUID()

    if (!trimmed.name) {
      return res.status(400).json({ success: false, message: 'Name is required.' })
    }
    if (!trimmed.email) {
      return res.status(400).json({ success: false, message: 'Email is required.' })
    }
    if (!trimmed.subject) {
      return res.status(400).json({ success: false, message: 'Subject is required.' })
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (trimmed.email.length > 254 || !emailRe.test(trimmed.email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' })
    }
    if (!trimmed.message) {
      return res.status(400).json({ success: false, message: 'Message is required.' })
    }

    if (trimmed.name.length > 120 || trimmed.subject.length > 200 || trimmed.company.length > 160 || trimmed.projectType.length > 120 || trimmed.message.length > 5000) {
      return res.status(400).json({ success: false, message: 'One or more fields exceed the allowed length.' })
    }

    // Honor retries for requests already delivered when MongoDB is available.
    if (suppliedId && Contact.db.readyState === 1) {
      try {
        const existing = await Contact.findOne({ submissionId }).lean()
        if (existing?.notificationSent) {
          return res.status(200).json({ success: true, notificationSent: true, message: 'Your inquiry email was sent successfully.' })
        }
      } catch {
        console.error('MongoDB retry lookup failed; continuing with email delivery.')
      }
    }

    // Email delivery is the primary outcome. A failed SMTP send must never be
    // reported as a successful inquiry, even if MongoDB happens to be online.
    try {
      await sendInquiryNotification({ ...trimmed, createdAt: new Date() })
    } catch (err) {
      if (err?.code === 'SMTP_NOT_CONFIGURED') {
        console.error('Contact email is unavailable: SMTP settings are missing or invalid.')
        return res.status(503).json({ success: false, notificationSent: false, message: 'Email delivery is not configured. Please try again later or contact the site owner.' })
      }
      console.error('Contact email delivery failed:', err?.code || 'SMTP_ERROR')
      return res.status(502).json({ success: false, notificationSent: false, message: 'We could not send your inquiry email. Please try again later.' })
    }

    // Keep MongoDB records for the admin dashboard, but never block delivery.
    if (Contact.db.readyState === 1) {
      try {
        await Contact.create({ ...trimmed, submissionId, notificationSent: true })
      } catch (err) {
        if (err?.code !== 11000) console.error('Inquiry email was sent, but its MongoDB record could not be saved.')
      }
    }
    return res.status(201).json({ success: true, notificationSent: true, message: 'Your inquiry email was sent successfully.' })
  } catch (err) {
    if (err?.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: 'Please check the submitted fields and try again.' })
    }
    console.error('Contact submission could not be processed:', err?.name || 'Error', err?.code || 'UNEXPECTED_ERROR')
    return res.status(500).json({ success: false, message: 'We could not process your inquiry right now. Please try again later.' })
  }
}
