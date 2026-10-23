const crypto = require('crypto')

const COOKIE_NAME = 'avex_admin_session'
const SESSION_TTL_MS = 8 * 60 * 60 * 1000
const LOGIN_WINDOW_MS = 15 * 60 * 1000
const MAX_LOGIN_ATTEMPTS = 5
const sessions = new Map()
const loginAttempts = new Map()

const cleanupInterval = setInterval(() => {
  const now = Date.now()
  for (const [key, expiresAt] of sessions) {
    if (expiresAt <= now) sessions.delete(key)
  }
  for (const [key, attempt] of loginAttempts) {
    if (now - attempt.startedAt >= LOGIN_WINDOW_MS) loginAttempts.delete(key)
  }
}, 15 * 60 * 1000)
cleanupInterval.unref()

function getAdminCredentials() {
  const username = process.env.ADMIN_USERNAME
  const password = process.env.ADMIN_PASSWORD
  if (!username || !password || password.length < 12) return null
  return { username, password }
}

function hash(value) {
  return crypto.createHash('sha256').update(value).digest()
}

function safeEqual(actual, expected) {
  return crypto.timingSafeEqual(hash(actual), hash(expected))
}

function getSessionToken(req) {
  const item = (req.headers.cookie || '').split(';').map((part) => part.trim()).find((part) => part.startsWith(`${COOKIE_NAME}=`))
  return item ? item.slice(COOKIE_NAME.length + 1) : ''
}

function createSession(res) {
  const token = crypto.randomBytes(32).toString('base64url')
  const expiresAt = Date.now() + SESSION_TTL_MS
  sessions.set(hash(token).toString('hex'), expiresAt)
  const parts = [`${COOKIE_NAME}=${token}`, 'Path=/api/admin', 'HttpOnly', 'SameSite=Strict', `Max-Age=${SESSION_TTL_MS / 1000}`]
  if (process.env.NODE_ENV === 'production') parts.push('Secure')
  res.setHeader('Set-Cookie', parts.join('; '))
}

function clearSession(req, res) {
  const token = getSessionToken(req)
  if (token) sessions.delete(hash(token).toString('hex'))
  const parts = [`${COOKIE_NAME}=`, 'Path=/api/admin', 'HttpOnly', 'SameSite=Strict', 'Max-Age=0']
  if (process.env.NODE_ENV === 'production') parts.push('Secure')
  res.setHeader('Set-Cookie', parts.join('; '))
}

function requireAdmin(req, res, next) {
  res.setHeader('Cache-Control', 'no-store')
  const token = getSessionToken(req)
  const sessionKey = token ? hash(token).toString('hex') : ''
  const expiresAt = sessionKey ? sessions.get(sessionKey) : null
  if (!expiresAt || expiresAt <= Date.now()) {
    if (sessionKey) sessions.delete(sessionKey)
    return res.status(401).json({ success: false, message: 'Admin login is required.' })
  }
  req.adminAuthenticated = true
  return next()
}

function limitLoginAttempts(req, res, next) {
  const now = Date.now()
  const key = req.ip || req.socket.remoteAddress || 'unknown'
  const attempt = loginAttempts.get(key)
  if (!attempt || now - attempt.startedAt >= LOGIN_WINDOW_MS) {
    loginAttempts.set(key, { startedAt: now, count: 1 })
    return next()
  }
  if (attempt.count >= MAX_LOGIN_ATTEMPTS) {
    return res.status(429).json({ success: false, message: 'Too many login attempts. Wait 15 minutes and try again.' })
  }
  attempt.count += 1
  return next()
}

function resetLoginAttempts(req) {
  loginAttempts.delete(req.ip || req.socket.remoteAddress || 'unknown')
}

module.exports = {
  clearSession,
  createSession,
  getAdminCredentials,
  limitLoginAttempts,
  requireAdmin,
  resetLoginAttempts,
  safeEqual,
}
