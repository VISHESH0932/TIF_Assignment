const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Generator } = require('snowflake-generator'); // Import snowflake-generator

// Initialize the Generator with the EPOCH timestamp in milliseconds (start date).
const SnowflakeGenerator = new Generator(1420070400000);

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ status: false, error: 'EMAIL_ALREADY_EXISTS' });

  const hashed = await bcrypt.hash(password, 10);

  // Generate a snowflake (unique ID) for the user
  const userId = SnowflakeGenerator.generate(); // Generates a unique snowflake ID

  const user = await User.create({ id: userId, name, email, password: hashed });
  return res.status(201).json({ status: true, content: { data: user } });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ status: false, error: 'INVALID_CREDENTIALS' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return res.json({ status: true, content: { data: { token } } });
};

exports.getMe = async (req, res) => {
  const user = await User.findOne({ id: req.user.id });
  res.json({ status: true, content: { data: user } });
};
