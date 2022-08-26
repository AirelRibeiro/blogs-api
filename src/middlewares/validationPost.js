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
