import asyncHandler from '../middleware/async.js'
import {
  addCourier,
  getCourierById,
  updateCourierById,
  deleteCourierById,

} from '../services/courier.js'

export const courierRegister = asyncHandler(async (req, res) => {
  const a = await addCourier(req.body)
  console.log('this is controller', a)
  res.send(a)
})

console.log("connected controller successfully");

export const getcourier = asyncHandler(async (req, res) => {
  const ans = await getCourierById(req.params.id)
  res.json(ans)
})

export const updateCourier = asyncHandler(async (req, res) => {
  const ans = await updateCourierById(req.params.id, req.body)
  res.send(ans)
})

export const deleteCourier = asyncHandler(async (req, res) => {
  const ans = await deleteCourierById(req.params.id)
  res.send(ans)
})