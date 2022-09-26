import { Joi } from 'celebrate'

export const addLeaveSchema = {
  empId: Joi.string().hex().length(8).required(),
  leaveId: Joi.string().hex().length(8).required(),
  start_date: Joi.date().required(),
  num_days: Joi.number().required(),
  approval: Joi.string().required(),
  reason: Joi.string().required(),
}
