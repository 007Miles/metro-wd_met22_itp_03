import { Joi } from 'celebrate'

export const addProductSchema = {
  name: Joi.string().required(),
  measurement_unit: Joi.string().valid('kg', 'g', 'l', 'ml').required(),
  markupPrice: Joi.number().required(),
  storageCondition: Joi.string().required(),
  type: Joi.string().required(),
  description: Joi.string().min(5).max(10).required(),
}
