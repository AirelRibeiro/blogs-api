const express = require('express');
const userController = require('../controllers/user');
const tokenAuthentication = require('../middlewares/authentication');
const userFields = require('../middlewares/validationUser');

const userRoute = express.Router();

userRoute.post('/', userFields, userController.create);
userRoute.get('/:id', tokenAuthentication, userController.findOnUser);
userRoute.get('/', tokenAuthentication, userController.findAll);
userRoute.delete('/me', tokenAuthentication, userController.delete);

module.exports = userRoute;
