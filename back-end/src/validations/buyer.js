import { Joi } from 'celebrate'

export const BuyerAccountSchema = Joi.object({
  businessName: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().min(3).max(15).required(),
  ConfirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .messages({ 'any.only': '{{#label}} does not match' }),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/),
  address: Joi.string().required(),
  address_line2: Joi.string(),
  city: Joi.string(),
  credentialId: Joi.string(),
})
