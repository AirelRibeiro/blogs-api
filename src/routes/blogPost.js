const express = require('express');
const blogPostController = require('../controllers/blogPost');
const tokenAuthentication = require('../middlewares/authentication');
const validPost = require('../middlewares/validationPostCreate');
const validUpdate = require('../middlewares/validationPostUpdate');

const blogPostRoute = express.Router();

blogPostRoute.use(tokenAuthentication);

blogPostRoute.get('/:id', blogPostController.findOnePost);
blogPostRoute.get('/', blogPostController.findAll);
blogPostRoute.post('/', validPost, blogPostController.create);
blogPostRoute.put('/:id', validUpdate, blogPostController.update);

module.exports = blogPostRoute;
