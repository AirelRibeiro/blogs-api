const express = require('express');
const tokenAuthentication = require('../middlewares/authentication');

const blogPostRoute = express.Router();

blogPostRoute.use(tokenAuthentication);
module.exports = blogPostRoute;