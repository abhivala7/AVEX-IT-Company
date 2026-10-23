import React, { useRef, useState } from 'react'
import LineReveal from './LineReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', company: '', projectType: '', message: '' })
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const submissionId = useRef(null)

  const handleChange = (e) => {
    submissionId.current = null
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = (vals) => {
    const errs = {}
    if (!vals.name || !vals.name.trim()) errs.name = 'Name is required.'
    if (!vals.email || !vals.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) errs.email = 'Enter a valid email.'
    if (!vals.subject || !vals.subject.trim()) errs.subject = 'Subject is required.'
    if (!vals.message || !vals.message.trim()) errs.message = 'Message is required.'
    if (vals.name.trim().length > 120) errs.name = 'Name must be 120 characters or fewer.'
    if (vals.email.trim().length > 254) errs.email = 'Email must be 254 characters or fewer.'
    if (vals.subject.trim().length > 200) errs.subject = 'Subject must be 200 characters or fewer.'
    if (vals.message.trim().length > 5000) errs.message = 'Message must be 5,000 characters or fewer.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    const trimmed = { ...form, name: form.name.trim(), email: form.email.trim(), subject: form.subject.trim(), company: form.company.trim(), projectType: form.projectType.trim(), message: form.message.trim() }
    const v = validate(trimmed)
    setErrors(v)
    if (Object.keys(v).length) return

    setSending(true)
    try {
      if (!submissionId.current) submissionId.current = window.crypto.randomUUID()
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Idempotency-Key': submissionId.current },
        body: JSON.stringify(trimmed),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok) {
        setStatus({ ok: false, msg: data?.message || `The contact service returned HTTP ${res.status}. Please try again.` })
      } else if (data?.success === true) {
        setStatus({ ok: true, warning: data.notificationSent === false, msg: data.message || 'Thank you — message received.' })
        setForm({ name: '', email: '', subject: '', company: '', projectType: '', message: '' })
        setErrors({})
        submissionId.current = null
      } else {
        setStatus({ ok: false, msg: data?.message || 'The server could not confirm that your message was saved. Please try again.' })
      }
    } catch (err) {
      setStatus({ ok: false, msg: 'Unable to reach the contact service. Check that the frontend proxy and backend are running, then try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="section-inner contact-centered">
        <header className="contact-header">
          <div className="eyebrow">LET'S WORK TOGETHER</div>
          <h2 id="contact-heading" className="section-title"><LineReveal text="Have a project in mind?" /></h2>
          <p className="section-sub"><LineReveal text="Tell us what you're building. We'll help you turn your idea into a practical digital solution." /></p>
        </header>

        <div className="contact-card-large contact-premium">
          <div className="contact-card-grid">
            <aside className="contact-left contact-info">
              <h3><LineReveal text="Start a conversation" /></h3>
              <p className="muted"><LineReveal text="Tell us a little about your goals and we'll suggest the best way forward." /></p>

              <p className="muted contact-email"><LineReveal text="Email:" /> <span className="email-value"><LineReveal text="thymevala@gmail.com" /></span></p>
              <p className="muted"><LineReveal text="Phone:" /> <span className="email-value"><LineReveal text="+1 (555) 010-0000" /></span> <small className="demo-inline"><LineReveal text="Demo placeholder" /></small></p>
              <p className="muted"><LineReveal text="Location: Remote-first — distributed team across US & EU" /></p>
              <p className="muted"><LineReveal text="Typical response time: 1–2 business days" /></p>

              <div className="contact-mini-links">
                <a href="mailto:thymevala@gmail.com">Email us</a>
              </div>
            </aside>

            <div className="contact-right contact-form-panel">
              <div className="contact-form-context">
                <span>INQUIRY / AVEX</span>
                <code>POST /api/contact</code>
              </div>
              <form className="contact-form premium" onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <label className="field">
                    <span className="field-label">Full name</span>
                    <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} required />
                    {errors.name && <div id="err-name" className="status err">{errors.name}</div>}
                  </label>
                  <label className="field">
                    <span className="field-label">Work email</span>
                    <input name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} required />
                    {errors.email && <div id="err-email" className="status err">{errors.email}</div>}
                  </label>
                </div>

                <div className="row">
                  <label className="field">
                    <span className="field-label">Company</span>
                    <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
                  </label>
                  <label className="field">
                    <span className="field-label">Subject</span>
                    <input name="subject" placeholder="What is this inquiry about?" value={form.subject} onChange={handleChange} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'err-subject' : undefined} required />
                    {errors.subject && <div id="err-subject" className="status err">{errors.subject}</div>}
                  </label>
                </div>

                <label className="field">
                  <span className="field-label">Message</span>
                  <textarea name="message" placeholder="Short summary of your project" value={form.message} onChange={handleChange} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined} required />
                  {errors.message && <div id="err-message" className="status err">{errors.message}</div>}
                </label>

                <div className="form-foot">
                  <button className="btn cta-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send Inquiry'}</button>
                  {status && <div className={`status ${status.ok ? status.warning ? 'warning' : 'ok' : 'err'}`} role={status.warning ? 'alert' : 'status'} aria-live="polite">{status.msg}</div>}
                </div>
              </form>
            </div>
          </div>
          <div className="contact-accent" aria-hidden />
        </div>
      </div>
    </section>
  )
}
