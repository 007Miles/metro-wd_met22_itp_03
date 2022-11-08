import { Joi } from 'celebrate'

export const createwarehouseSchema = {
    wareId: Joi.string().length(4).required(),
    address: Joi.string().required(),
    phone: Joi.number().required(),
    storageCond: Joi.string().required(),
}
