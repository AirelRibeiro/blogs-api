const express = require('express');
const loginController = require('../controllers/login');
const fieldsValidation = require('../middlewares/validationLogin');

const loginRoute = express.Router();

loginRoute.post('/', fieldsValidation, loginController.userLogin);

module.exports = loginRoute;
