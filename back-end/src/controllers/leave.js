import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import {
  createleaveform,
  getleaveId,
  updateLeaveById,
  deleteLeaveById,
  getAllLeaves,
} from '../services/leave.js'

export const createleave = asyncHandler(async (req, res) => {
  const ans = await createleaveform(req.body)
  console.log('Mark leave is sucsessfull from the Controllers', ans)
  // res.send(ans)
  return makeResponse({
    res,
    status: 203,
    message: 'New Leave request has been created',
  })
})

// get all leaves
export const getleaves = asyncHandler(async(req, res) => {
  const ans = await getAllLeaves()
  res.json(ans)
})


export const getleave = asyncHandler(async (req, res) => {
  const ans = await getleaveId(req.params.id)
  //res.json(ans)
  return makeResponse({
    res,
    status: 203,
    message: 'Display Leave request',
  })
})

export const putleave = asyncHandler(async (req, res) => {
  const ans = await updateLeaveById(req.params.id, req.body)
  //res.send(ans)
  return makeResponse({
    res,
    status: 203,
    message: 'Leave request has been updated',
  })
})

export const deleteleave = asyncHandler(async (req, res) => {
  const ans = await deleteLeaveById(req.params.id)
  //res.send(ans)
  return makeResponse({
    res,
    status: 203,
    message: 'Deleted Leave request',
  })
})


