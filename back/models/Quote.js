const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  email: { type: String, required: true },
  projectName: { type: String, required: true },
  budget: { type: String, required: true },
  functionality: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quote', quoteSchema);
