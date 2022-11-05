import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import {
  addSchedules,
  getSchedulesByID,
  updateSchedulesByID,
  deleteSchedulesByID,
  getAllSches,
} from '../services/Schedules.js'

//Add new schedule
export const newSchedules = asyncHandler(async (req, res) => {
  const ans = await addSchedules(req.body)
  //console.log('Controller testing', ans)
  // res.send(ans)
  return makeResponse({
    res,
    status: 201,
    data: ans,
    message: 'New supply schedule successfully added',
  })
})

//Get new schedule
export const getSchedules = asyncHandler(async (req, res) => {
  const ans = await getSchedulesByID(req.params.id)
  // res.json(ans)
  return makeResponse({
    res,
    status: 202,
    data: ans,
    message: 'Supply schedule successfully retrieved',
  })
})

//Get All Schedules
export const getAllSchedules = asyncHandler(async (req, res) => {
  const ans = await getAllSches()
  res.status(200).json(ans)
})

//Update schedules
export const updateSchedules = asyncHandler(async (req, res) => {
  const ans = await updateSchedulesByID(req.params.id, req.body)
  // res.send(ans)
  return makeResponse({
    res,
    status: 203,
    data: ans,
    message: 'Supply schedule successfully updated',
  })
})

//Delete schedules
export const deleteSchedules = asyncHandler(async (req, res) => {
  const ans = await deleteSchedulesByID(req.params.id)
  // res.send(ans)
  return makeResponse({
    res,
    status: 204,
    data: ans,
    message: 'Supply schedule successfully deleted',
  })
})
