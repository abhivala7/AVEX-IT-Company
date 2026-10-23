// Placeholder DB helper
const mongoose = require('mongoose')

async function connect(uri) {
  if (!uri) throw new Error('A MongoDB connection URI is required.')
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  return mongoose.connection
}

module.exports = { connect }
