import { Joi } from 'celebrate'

export const createSupMembershipSchema = {
  cred_id: Joi.string().hex().length(24).required(),
  verified: Joi.boolean(),
  business_name: Joi.string().required(),
  email: Joi.string().required(),
  registered_products: Joi.string().required(),
  phone: Joi.string().length(10).required(),
  address: Joi.string().required(),
}
