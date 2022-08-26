const nameValidate = (req, _res, next) => {
  const { name } = req.body;
  if (!name) return next({ message: '"name" is required', code: 400 });
  return next();
};

module.exports = nameValidate;
