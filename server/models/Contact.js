// Placeholder Mongoose model for future use
const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
  subject: { type: String, required: true, trim: true, maxlength: 200 },
  company: { type: String, trim: true, maxlength: 160, default: '' },
  projectType: { type: String, trim: true, maxlength: 120, default: '' },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  submissionId: { type: String, unique: true, sparse: true },
  notificationSent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)
