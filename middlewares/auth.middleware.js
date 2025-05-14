const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ status: false, error: 'AUTH_HEADER_MISSING' });

  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ status: false, error: 'INVALID_TOKEN' });
  }
};
