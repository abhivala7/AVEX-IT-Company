import React, { useCallback, useEffect, useState } from 'react'

async function readResponse(response) {
  const data = await response.json().catch(() => null)
  return { response, data }
}

function formatDate(value) {
  if (!value) return '—'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '—'
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}

export default function AdminInquiries() {
  const [checking, setChecking] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [inquiries, setInquiries] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const loadInquiries = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const { response, data } = await readResponse(await fetch('/api/admin/inquiries', { cache: 'no-store' }))
      if (response.status === 401) {
        setAuthenticated(false)
        setInquiries([])
        setTotal(0)
        return
      }
      if (!response.ok || data?.success !== true) {
        throw new Error(data?.message || `Unable to load inquiries (HTTP ${response.status}).`)
      }
      setInquiries(Array.isArray(data.inquiries) ? data.inquiries : [])
      setTotal(Number.isFinite(data.total) ? data.total : 0)
    } catch (err) {
      setError(err.message || 'Unable to load inquiries. Check the server connection and try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let active = true
    async function checkSession() {
      try {
        const { response, data } = await readResponse(await fetch('/api/admin/session', { cache: 'no-store' }))
        if (!active) return
        if (response.ok && data?.authenticated === true) {
          setAuthenticated(true)
          await loadInquiries()
        } else if (response.status !== 401) {
          setError(data?.message || `Unable to verify admin login (HTTP ${response.status}).`)
        }
      } catch {
        if (active) setError('Unable to reach the admin service. Check that the backend is running.')
      } finally {
        if (active) setChecking(false)
      }
    }
    checkSession()
    return () => { active = false }
  }, [loadInquiries])

  async function handleLogin(event) {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const { response, data } = await readResponse(await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      }))
      if (!response.ok || data?.success !== true) {
        throw new Error(data?.message || `Admin login failed (HTTP ${response.status}).`)
      }
      setAuthenticated(true)
      setCredentials({ username: '', password: '' })
      await loadInquiries()
    } catch (err) {
      setError(err.message || 'Unable to sign in. Check the server connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleLogout() {
    setError('')
    try {
      const response = await fetch('/api/admin/logout', { method: 'POST' })
      if (!response.ok) throw new Error('Could not end the admin session. Please try again.')
      setAuthenticated(false)
      setInquiries([])
      setTotal(0)
    } catch (err) {
      setError(err.message || 'Could not end the admin session.')
    }
  }

  if (checking) {
    return <main className="site-main admin-page"><section className="section admin-inquiries"><p className="admin-loading" role="status">Checking admin session…</p></section></main>
  }

  if (!authenticated) {
    return (
      <main className="site-main admin-page">
        <section className="section admin-inquiries" aria-labelledby="admin-login-heading">
          <div className="admin-login-panel">
            <div className="admin-eyebrow">AVEX / PRIVATE AREA</div>
            <h1 id="admin-login-heading">Admin sign in</h1>
            <p>Sign in to view saved contact inquiries.</p>
            {error && <div className="admin-error" role="alert">{error}</div>}
            <form className="admin-login-form" onSubmit={handleLogin}>
              <label>
                <span>Username</span>
                <input autoComplete="username" name="username" value={credentials.username} onChange={(event) => setCredentials({ ...credentials, username: event.target.value })} required />
              </label>
              <label>
                <span>Password</span>
                <input autoComplete="current-password" name="password" type="password" value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} required />
              </label>
              <button className="admin-button admin-button-primary" type="submit" disabled={submitting}>{submitting ? 'Signing in…' : 'Sign in'}</button>
            </form>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="site-main admin-page">
      <section className="section admin-inquiries" aria-labelledby="admin-inquiries-heading">
        <header className="admin-heading">
          <div>
            <div className="admin-eyebrow">AVEX / CONTACT INBOX</div>
            <h1 id="admin-inquiries-heading">Inquiries</h1>
            <p>Private contact submissions stored in MongoDB.</p>
          </div>
          <div className="admin-actions">
            <button className="admin-button" type="button" onClick={loadInquiries} disabled={loading}>{loading ? 'Refreshing…' : 'Refresh'}</button>
            <button className="admin-button admin-button-quiet" type="button" onClick={handleLogout}>Sign out</button>
          </div>
        </header>

        <div className="admin-count"><strong>{total}</strong><span>Total inquiries</span></div>
        {error && <div className="admin-error" role="alert">{error}</div>}
        {loading && <p className="admin-loading" role="status">Loading inquiries…</p>}
        {!loading && !error && total === 0 && <div className="admin-empty">No contact inquiries have been submitted yet.</div>}

        {!loading && inquiries.length > 0 && (
          <>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <caption className="admin-visually-hidden">Saved contact inquiries</caption>
                <thead><tr><th>Name</th><th>Email</th><th>Company</th><th>Project type</th><th>Message</th><th>Submitted</th></tr></thead>
                <tbody>{inquiries.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name || '—'}</td>
                    <td><a href={`mailto:${encodeURIComponent(item.email || '')}`}>{item.email || '—'}</a></td>
                    <td>{item.company || '—'}</td>
                    <td>{item.projectType || '—'}</td>
                    <td className="admin-message-cell">{item.message || '—'}</td>
                    <td>{formatDate(item.createdAt)}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <div className="admin-cards">
              {inquiries.map((item) => (
                <article className="admin-inquiry-card" key={item._id}>
                  <header><strong>{item.name || '—'}</strong><time dateTime={item.createdAt || undefined}>{formatDate(item.createdAt)}</time></header>
                  <a href={`mailto:${encodeURIComponent(item.email || '')}`}>{item.email || '—'}</a>
                  <dl>
                    <div><dt>Company</dt><dd>{item.company || '—'}</dd></div>
                    <div><dt>Project type</dt><dd>{item.projectType || '—'}</dd></div>
                  </dl>
                  <p>{item.message || '—'}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  )
}
