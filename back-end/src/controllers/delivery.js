import asyncHandler from '../middleware/async.js'

import makeResponse from '../middleware/response.js'
import { getDelivery, addDelivery } from '../services/delivery.js'

export const viewDelivery = asyncHandler(async (req, res) => {
  const delivery = await getDelivery(req.params.delivery_id)
  return makeResponse({ res, status:200, data: delivery, message : "Delivery successfully fetched" })
})

export const createDelivery = asyncHandler(async (req, res) => {
  await addDelivery(req.body)
  return makeResponse({ res, status:201, data: delivery, message : "Delivery successfully craeted" })
})
