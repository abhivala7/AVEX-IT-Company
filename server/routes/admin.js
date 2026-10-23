const express = require('express')
const {
  getSession,
  listInquiries,
  login,
  logout,
} = require('../controllers/adminController')
const { limitLoginAttempts, requireAdmin } = require('../middleware/adminAuth')

const router = express.Router()

router.post('/login', limitLoginAttempts, login)
router.post('/logout', logout)
router.get('/session', requireAdmin, getSession)
router.get('/inquiries', requireAdmin, listInquiries)

module.exports = router
