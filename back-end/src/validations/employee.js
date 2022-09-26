import { Joi } from 'celebrate'

export const createEmployeeSchema = {
    empName: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.number().required(),
    dob: Joi.date().required(),
    empId: Joi.string().length(8).required(),
    nic: Joi.string().required(),
    gender: Joi.string().required(),
    wareId: Joi.string().length(4).required(),
    role: Joi.string().required(),
    email: Joi.string().required(),
}
