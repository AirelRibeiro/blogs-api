const validateFieldsExistence = (body) => {
  if (!body.title || !body.content) {
    return { message: 'Some required fields are missing', code: 400 };
  }
  return true;
};
