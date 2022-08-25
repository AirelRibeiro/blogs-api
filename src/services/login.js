const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const loginService = {
  userLogin: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) return { message: 'Invalid fields', code: 400 };
    if (user && user.password !== password) return { message: 'Invalid fields', code: 400 };

    const token = jwt
      .sign({ data: { email, id: user.dataValues.id } }, JWT_SECRET, { algorithm: 'HS256' });
    return { token };
  },
};

module.exports = loginService;
