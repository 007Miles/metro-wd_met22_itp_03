import asyncHandler from '../middleware/async.js'
import { addSchedules } from '../services/Schedules.js'

export const newSchedules = asyncHandler(async (req, res) => {
  const ans = await addSchedules(req.body)
  //console.log('Controller testing', ans)
  res.send(ans)
})
