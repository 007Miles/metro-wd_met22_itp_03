import asyncHandler from '../middleware/async.js'
import { getDelivery, addDelivery } from '../services/delivery.js'

export const viewDelivery = asyncHandler(async (req, res) => {
  const delivery = await getDelivery(req.params.id)
  res.status(200).json(delivery)
})

export const createDelivery = asyncHandler(async (req, res) => {
  await addDelivery(req.body)
})