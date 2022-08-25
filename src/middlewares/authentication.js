require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenAuthentication = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next({ message: 'Token not found', code: 401 });
  try {
    const decodedInformation = jwt.verify(authorization, JWT_SECRET);
    req.userData = decodedInformation.data;
    return next();
  } catch (err) {
    return next({ message: 'Expired or invalid token', code: 401 });
  }
};

module.exports = tokenAuthentication;
