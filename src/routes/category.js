const express = require('express');
const tokenAuthentication = require('../middlewares/authentication');
const categoryRoute = express.Router();

categoryRoute.use(tokenAuthentication);
module.exports = categoryRoute;