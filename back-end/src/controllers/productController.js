import asyncHandler from '../middleware/async.js'
import Product from '../models/productModel.js'
import {
  createProductSrc,
  getAllProductSrc,
  getSingleProductSrc,
  deleteSingleProductSrc,
  updateSingleProductSrc,
} from '../services/productService.js'

//GET all products
export const getAllProduct = asyncHandler(async (req, res) => {
  const product = await getAllProductSrc()
  res.status(200).json(product)
})

//GET single product
export const getAproduct = asyncHandler(async (req, res) => {
  const product = await getSingleProductSrc(req.params.id)
  // return makeResponse({
  //   res,
  //   status: 200,
  //   data: product,
  //   message: 'Product successfully fetched',
  // })
  res.status(200).json(product)
})

//CREATE single product
export const singleProductCreate = asyncHandler(async (req, res) => {
  const product = await createProductSrc(req.body)
  // return makeResponse({
  //   res,
  //   status: 200,
  //   data: product,
  //   message: 'Product successfully created',
  //})
  res.status(200).json(product)
})

//DELETE single product
export const singleProductDelete = asyncHandler(async (req, res) => {
  const product = await deleteSingleProductSrc(req.params.id)
  // return makeResponse({
  //   res,
  //   status: 200,
  //   data: product,
  //   message: 'Product successfully deleted',
  // })
  res.status(200).json(product)
})

//UPDATE single product
export const singleProductUpdate = asyncHandler(async (req, res) => {
  const product = await updateSingleProductSrc(req.params.id, req.body)
  // return makeResponse({
  //   res,
  //   status: 200,
  //   data: product,
  //   message: 'Product successfully updated',
  // })
  res.status(200).json(product)
})
