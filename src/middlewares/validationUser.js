const Joi = require('joi');
const { User } = require('../database/models');

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
  image: Joi.string(),
});

const userFields = async (req, res, next) => {
  const validFields = fieldsValidations.validate(req.body);
  if (validFields.error) {
    return next({ message: validFields.error.details[0].message, code: 400 });
  }
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) return next({ message: 'User already registered', code: 409 });

  return next();
};

module.exports = userFields;
