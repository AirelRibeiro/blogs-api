const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const loginService = {
  userLogin: (userData) => {

  },
};