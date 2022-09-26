import { Joi } from 'celebrate'

export const createcourierSchema = {
businessName: Joi.string().required(),
address: Joi.string().required(),
phone: Joi.string().length(10).required(),
email: Joi.string().required(),
credentialId: Joi.string().length(3).required(),
transportConditions: Joi.string().required(),
OperationalArea: Joi.string().required(),
}