import { Joi } from 'celebrate'

export const createScheduleSchema = {
  supplierID: Joi.string().required(),
  supplier_name: Joi.string().required(),
  product: Joi.string().required(),
  quantity: Joi.string().required(),
  price: Joi.number().required(),
  warehouse: Joi.string().required(),
  weekly: Joi.boolean(),
  monthly: Joi.boolean(),
  yearly: Joi.boolean(),
  date: Joi.date().required(),
  dayOfTheWeek: Joi.string(),
  dayOfTheMonth: Joi.number(),
  // time: Joi.date().required(),
}
