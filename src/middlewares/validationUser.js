const fieldsValidations = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'any.required': '"displayName" is required',
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.required': '"email" must be a valid email',
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': '"displayName" is required',
    'string.min': '"password" length must be at least 6 characters long',
  }),
});

  const validFields = fieldsValidations.validate(req.body);
  if (validFields.error) {
    return next({ message: validFields.error.details[0].message, code: 400 });
  }
