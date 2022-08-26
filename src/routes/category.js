const express = require('express');
const tokenAuthentication = require('../middlewares/authentication');
const nameValidate = require('../middlewares/validationCategory');
const categoryRoute = express.Router();

categoryRoute.use(tokenAuthentication);
module.exports = categoryRoute;