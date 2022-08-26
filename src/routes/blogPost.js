const express = require('express');
const blogPostController = require('../controllers/blogPost');
const tokenAuthentication = require('../middlewares/authentication');

const blogPostRoute = express.Router();

blogPostRoute.use(tokenAuthentication);
blogPostRoute.get('/', blogPostController.findAll);

module.exports = blogPostRoute;