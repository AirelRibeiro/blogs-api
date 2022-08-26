const express = require('express');
const userController = require('../controllers/user');
const tokenAuthentication = require('../middlewares/authentication');
const userFields = require('../middlewares/validationUser');

const userRoute = express.Router();

userRoute.post('/', userFields, userController.create);

module.exports = userRoute;
