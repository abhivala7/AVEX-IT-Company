const nodemailer = require('nodemailer')

let transporter

function mailerError(code, message) {
  const error = new Error(message)
  error.code = code
  return error
}

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env
  const port = Number(SMTP_PORT || 587)
  if (!SMTP_HOST?.trim() || !Number.isInteger(port) || port < 1 || port > 65535 || !SMTP_USER?.trim() || !SMTP_PASS) {
    throw mailerError('SMTP_NOT_CONFIGURED', 'SMTP host, port, username, and password must be configured.')
  }
  if (SMTP_SECURE && !['true', 'false'].includes(SMTP_SECURE.toLowerCase())) {
    throw mailerError('SMTP_NOT_CONFIGURED', 'SMTP_SECURE must be true or false.')
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: SMTP_SECURE ? SMTP_SECURE.toLowerCase() === 'true' : port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  }
  return transporter
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character])
}

exports.sendInquiryNotification = async (inquiry) => {
  const { SMTP_FROM, INQUIRY_TO } = process.env
  if (!SMTP_FROM?.trim() || !INQUIRY_TO?.trim()) {
    throw mailerError('SMTP_NOT_CONFIGURED', 'SMTP_FROM and INQUIRY_TO must be configured.')
  }

  const nameForSubject = inquiry.name.replace(/[\r\n\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 120)
  const date = new Date(inquiry.createdAt).toISOString()
  const rows = [
    ['Full name', inquiry.name],
    ['Work email', inquiry.email],
    ['Subject', inquiry.subject],
    ['Company', inquiry.company || 'Not provided'],
    ['Project type', inquiry.projectType || 'Not provided'],
    ['Message', inquiry.message],
    ['Submitted at (UTC)', date],
  ]
  const text = rows.map(([label, value]) => `${label}:\n${value}`).join('\n\n')
  const html = `<h2>New website inquiry</h2><table>${rows.map(([label, value]) => `<tr><th align="left" valign="top">${escapeHtml(label)}</th><td>${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`).join('')}</table>`

  const smtpTransporter = getTransporter()
  try {
    await smtpTransporter.sendMail({
      from: SMTP_FROM,
      to: INQUIRY_TO,
      replyTo: inquiry.email,
      subject: `New AVEX Website Inquiry — ${inquiry.subject || nameForSubject}`,
      text,
      html,
    })
  } catch {
    throw mailerError('SMTP_DELIVERY_FAILED', 'The SMTP provider did not accept the inquiry email.')
  }
}
