const blogPostService = require('../services/blogPost');

const validateFieldsExistence = (body) => {
  if (!body.title || !body.content) {
    return { message: 'Some required fields are missing', code: 400 };
  }
  return true;
};

const validatePost = async (postId) => {
  const post = await blogPostService.findOnePost(postId);
  return post;
};

const validUpdate = async (req, res, next) => {
  const { body } = req;
  const validate = validateFieldsExistence(body);
  if (validate.message) return next(validate);

  const validPost = await validatePost(req.params.id);
  if (validPost.message) return next(validPost);

  const { id } = req.userData;
  if (id !== validPost.userId) return next({ message: 'Unauthorized user', code: 401 });

  next();
};

module.exports = validUpdate;