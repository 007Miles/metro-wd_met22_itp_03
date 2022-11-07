import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
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
  return makeResponse({
    res,
    status: 200,
    data: product,
    message: 'products fetched',
  })
})

//GET single product
export const getAproduct = asyncHandler(async (req, res) => {
  const product = await getSingleProductSrc(req.params.id)
  return makeResponse({
    res,
    status: 200,
    data: product,
    message: 'Product successfully fetched',
  })
})

//CREATE single product
export const singleProductCreate = asyncHandler(async (req, res) => {
  const product = await createProductSrc(req.body)
  return makeResponse({
    res,
    status: 200,
    data: product,
    message: 'Product successfully created',
  })
})

//DELETE single product
export const singleProductDelete = asyncHandler(async (req, res) => {
  const product = await deleteSingleProductSrc(req.params.id)
  return makeResponse({
    res,
    status: 200,
    data: product,
    message: 'Product successfully deleted',
  })
})

//UPDATE single product
export const singleProductUpdate = asyncHandler(async (req, res) => {
  const product = await updateSingleProductSrc(req.params.id, req.body)
  return makeResponse({
    res,
    status: 200,
    data: product,
    message: 'Product successfully updated',
  })
})
