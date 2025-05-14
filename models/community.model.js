const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String, unique: true },
  slug: { type: String, unique: true },
  owner: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Community', communitySchema);
