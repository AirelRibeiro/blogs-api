const categoryService = require('../services/category');

const validateFieldsExistence = (body) => {
  if (!body.title || !body.content) {
    return { message: 'Some required fields are missing', code: 400 };
  }
  if (!body.categoryIds || body.categoryIds.length < 1) {
    return { message: 'Some required fields are missing', code: 400 };
  }
  return true;
};

const validateCategoryExistence = async (categories) => {
  const categoriesArray = await Promise
    .all(categories.map((category) => categoryService.findByPk(category)));

  const validCategories = categoriesArray.filter((category) => category);

  if (validCategories.length < 1) {
    return { message: '"categoryIds" not found', code: 400 };
  }
  return validCategories;
};

const validPost = async (req, res, next) => {
  const { body } = req;

  const validate = validateFieldsExistence(body);
  if (validate.message) return next(validate);

  const validsCategories = await validateCategoryExistence(body.categoryIds);
  if (validsCategories.message) return next(validsCategories);

  const { id } = req.userData;
  req.newPost = {
    title: body.title,
    content: body.content,
    userId: id,
    categoryIds: validsCategories,
  };

  next();
};

module.exports = validPost;
