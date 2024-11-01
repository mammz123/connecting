const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // match: [/\S+@\S+\.\S+/, 'is invalid'] // Validates email format
  },
  contactNumber: {
    type: String,
    required: true,
    // match: [/^\d{10}$/, 'is invalid'] // Assumes a 10-digit contact number
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;