import asyncHandler from '../middleware/async.js'
import {
  createProductSrc,
  getSingleProductSrc,
  deleteSingleProductSrc,
  updateSingleProductSrc,
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
export const singleProductDelete = asyncHandler(async (req, res) => {
  await deleteSingleProductSrc(req.params.id)
  res.status(200)
})

//UPDATE single product
export const singleProductUpdate = asyncHandler(async (req, res) => {
  const product = await updateSingleProductSrc(req.params.id, req.body)

  res.status(200).json(product)
})
