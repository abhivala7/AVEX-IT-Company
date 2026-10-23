const express = require('express')
const cors = require('cors')
const { connect } = require('./config/db')

const app = express()
app.use(cors())
app.use(express.json())

// Basic health route
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// Contact route (placeholder)
const contactRouter = require('./routes/contact')
app.use('/api/contact', contactRouter)
const adminRouter = require('./routes/admin')
app.use('/api/admin', adminRouter)

// Keep API errors in JSON so the Contact form can display a safe message.
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err)
  if (err?.type === 'entity.parse.failed') {
    return res.status(400).json({ success: false, message: 'The inquiry request was not valid JSON. Please review the form and try again.' })
  }
  console.error('API request failed:', err?.name || 'Error', err?.type || 'UNEXPECTED_ERROR')
  return res.status(500).json({ success: false, message: 'We could not process your request right now. Please try again later.' })
})

const PORT = process.env.PORT || 4000

async function startServer() {
  const localDevelopmentUri = process.env.NODE_ENV === 'production'
    ? ''
    : 'mongodb://127.0.0.1:27017/avex'
  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI || localDevelopmentUri

  if (mongoUri) {
    try {
      await connect(mongoUri)
      console.log('MongoDB connected')
    } catch {
      console.error('MongoDB connection failed. Inquiry emails will still be sent, but admin records are unavailable.')
    }
  } else {
    console.warn('MongoDB is not configured; contact submissions will return HTTP 503.')
  }

  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD.length < 12) {
    console.warn('Admin login is disabled until ADMIN_USERNAME and a 12+ character ADMIN_PASSWORD are configured.')
  }

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

startServer()
