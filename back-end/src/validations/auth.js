import { Joi } from 'celebrate'

export const createCredSchema = {
  username: Joi.string().required(),
  password: Joi.string().required(),
  user_id: Joi.string().length(24).hex().allow(null).required(),
  role: Joi.string().length(24).hex().allow(null).required(),
}

export const loginSchema = {
  username: Joi.string().required(),
  password: Joi.string().required(),
}
