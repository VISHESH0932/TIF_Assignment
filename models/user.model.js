const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
