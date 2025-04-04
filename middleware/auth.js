const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.cookies[process.env.COOKIE_NAME];

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send('Invalid token.');
  }
};
