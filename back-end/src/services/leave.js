import {
  createleavesheet,
  getleave,
  updateleaveusingId,
  deleteleaveusingId,
} from '../repository/leave.js'

export const createleaveform = async ({
  empId,
  leaveId,
  start_date,
  num_days,
  approval,
  reason,
}) => {
  const details = {
    empId,
    leaveId,
    start_date: start_date,
    num_days: Number(num_days),
    approval,
    reason,
  }
  console.log('services file details object ok', details)
  const y = await createleavesheet(details)
  return y.msg
}

export const getleaveId = async (id) => {
  return await getleave(id)
}

export const updateLeaveById = async (id, ob) => {
  console.log(ob)
  const ans = await updateleaveusingId(id, ob)
  return ans
}

export const deleteLeaveById = async (id) => {
  return await deleteleaveusingId(id)
}
