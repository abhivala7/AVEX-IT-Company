const Contact = require('../models/Contact')
const {
  clearSession,
  createSession,
  getAdminCredentials,
  resetLoginAttempts,
  safeEqual,
} = require('../middleware/adminAuth')

exports.login = (req, res) => {
  const credentials = getAdminCredentials()
  if (!credentials) {
    return res.status(503).json({ success: false, message: 'Admin login is not configured on the server.' })
  }

  const username = typeof req.body?.username === 'string' ? req.body.username : ''
  const password = typeof req.body?.password === 'string' ? req.body.password : ''
  const valid = Number(safeEqual(username, credentials.username)) & Number(safeEqual(password, credentials.password))
  if (!valid) {
    return res.status(401).json({ success: false, message: 'Username or password is incorrect.' })
  }

  resetLoginAttempts(req)
  createSession(res)
  return res.json({ success: true, message: 'Admin login successful.' })
}

exports.logout = (req, res) => {
  clearSession(req, res)
  return res.json({ success: true })
}

exports.getSession = (req, res) => res.json({ success: true, authenticated: true })

exports.listInquiries = async (req, res) => {
  if (Contact.db.readyState !== 1) {
    return res.status(503).json({ success: false, message: 'The inquiry database is temporarily unavailable.' })
  }

  try {
    const inquiries = await Contact.find({}, 'name email company projectType message createdAt')
      .sort({ createdAt: -1 })
      .lean()
    return res.json({ success: true, total: inquiries.length, inquiries })
  } catch {
    console.error('Admin inquiry query failed.')
    return res.status(503).json({ success: false, message: 'Unable to load inquiries right now. Please refresh and try again.' })
  }
}
