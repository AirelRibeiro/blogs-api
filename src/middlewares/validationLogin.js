const fieldsValidation = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return next({ message: 'Some required fields are missing', code: 400 });

  return next();
};

module.exports = fieldsValidation;
