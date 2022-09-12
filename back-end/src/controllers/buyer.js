import asyncHandler from '../middleware/async.js'
import {
  addBuyer,
  getBuyerById,
  deleteBuyerById,
  updateBuyerById,
} from '../services/buyer.js'

export const buyerRegister = asyncHandler(async (req, res) => {
  const ans = await addBuyer(req.body)
  console.log('this is controller', ans)
  res.send(ans)
})

export const getbuyer = asyncHandler(async (req, res) => {
  const ans = await getBuyerById(req.params.id)
  res.json(ans)
})

export const updateBuyer = asyncHandler(async (req, res) => {
  const ans = await updateBuyerById(req.params.id, req.body)
  res.send(ans)
})

export const deleteBuyer = asyncHandler(async (req, res) => {
  const ans = await deleteBuyerById(req.params.id)
  res.send(ans)
})
