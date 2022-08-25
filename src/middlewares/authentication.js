require('dotenv').config();
  const { authorization } = req.headers;
  if (!authorization) return next({ message: 'Token not found', code: 401 });
    const decodedInformation = jwt.verify(authorization, JWT_SECRET);
    req.userData = decodedInformation;
    return next();
