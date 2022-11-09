import { Joi } from 'celebrate'

export const createEmployeeSchema = {
    empName: Joi.string().required(),
    cred_id: Joi.string().hex().required(),
    address: Joi.string().required(),
    phone: Joi.number().required(),
    dob: Joi.date().required(),
    nic: Joi.string().required(),
    gender: Joi.string().required(),
    wareId: Joi.string().length(4).required(),
    role: Joi.string().required(),
    email: Joi.string().required(),
}

export const viewEmployeeSchema = {
    employee_id: Joi.string().hex().length(24).required(),
  }
  export const updateEmployeeSchema = {
    employee_id: Joi.string().hex().length(24).required(),
  }
//   export const deleteEmployeeSchema = {
//     emp_id: Joi.string().hex().length(24).required(),
//   }
