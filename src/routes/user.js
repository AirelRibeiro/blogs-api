const express = require('express');
const userController = require('../controllers/user');
const userFields = require('../middlewares/validationUser');

const userRoute = express.Router();

userRoute.post('/', userFields, userController.create);

module.exports = userRoute;
