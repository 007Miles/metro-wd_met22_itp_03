import asyncHandler from '../middleware/async.js'
import {
  createProductSrc,
  getSingleProductSrc,
} from '../services/productService.js'

//GET all products

//GET single product
export const getAproduct = asyncHandler(async (req, res) => {
  const product = await getSingleProductSrc(req.params.id)

  res.status(200).json(product)
})

//CREATE single product
export const singleProductCreate = asyncHandler(async (req, res) => {
  const product = await createProductSrc(req.body)

  res.status(200).json(product)
})

//DELETE single product

//UPDATE single product
