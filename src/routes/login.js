const express = require('express');
const loginController = require('../controllers/login');

const loginRoute = express.Router();

loginRoute.post('/', loginController.userLogin);

module.exports = loginRoute;
