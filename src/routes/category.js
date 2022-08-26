const express = require('express');
const categoryController = require('../controllers/category');
const tokenAuthentication = require('../middlewares/authentication');
const nameValidate = require('../middlewares/validationCategory');

const categoryRoute = express.Router();

categoryRoute.use(tokenAuthentication);

categoryRoute.post('/', nameValidate, categoryController.create);
categoryRoute.get('/', categoryController.findAll);

module.exports = categoryRoute;