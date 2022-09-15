import asyncHandler from '../middleware/async.js'
import {
  addSchedules,
  getSchedulesByID,
  updateSchedulesByID,
  deleteSchedulesByID,
} from '../services/Schedules.js'

//Add new schedule
export const newSchedules = asyncHandler(async (req, res) => {
  const ans = await addSchedules(req.body)
  //console.log('Controller testing', ans)
  res.send(ans)
})

//Get new schedule
export const getSchedules = asyncHandler(async (req, res) => {
  const ans = await getSchedulesByID(req.params.id)
  res.json(ans)
})

//Update schedules
export const updateSchedules = asyncHandler(async (req, res) => {
  const ans = await updateSchedulesByID(req.params.id, req.body)
  res.send(ans)
})

//Delete schedules
export const deleteSchedules = asyncHandler(async (req, res) => {
  const ans = await deleteSchedulesByID(req.params.id)
  res.send(ans)
})
