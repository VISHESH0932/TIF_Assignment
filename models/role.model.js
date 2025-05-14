const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String, unique: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', roleSchema);
