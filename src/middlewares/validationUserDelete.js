const userService = require('../services/user');

const validDelete = async (req, res, next) => {
  const { id } = req.userData;
  const user = userService.findOneUser(req.params.id);
  if (id !== user.id) return next({ message: 'Unauthorized user', code: 401 });
  return next();
};

module.exports = validDelete;
