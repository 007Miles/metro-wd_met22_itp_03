import asyncHandler from '../middleware/async.js'
import { getAllProductSrc } from '../services/buyerProducts.js'
import { getAllBatchSrc } from '../services/buyerProducts.js'

//GET all products
export const getAllProduct = asyncHandler(async (req, res) => {
  const product = await getAllProductSrc(req.query)
  res.json(product)
})

//GET all Batch
export const getAllBuyerBatchSrc = asyncHandler(async (req, res) => {
  const batch = await getAllBatchSrc(req.query)
  res.json(batch)
})
