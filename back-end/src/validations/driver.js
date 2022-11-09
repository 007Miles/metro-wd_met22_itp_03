import { Joi } from 'celebrate'

export const createDriverSchema = {
  username: Joi.string().required(),
  password: Joi.string().required(),
  empName: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  dob: Joi.string().required(),
  nic: Joi.string().required(),
  gender: Joi.string().required(),
  wareId: Joi.string().length(24).hex().allow(null).required(),
  role: Joi.string().required(),
  email: Joi.string().required().email(),
}
