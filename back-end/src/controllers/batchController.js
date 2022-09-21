import asyncHandler from '../middleware/async.js'

import {
  createBatchSrc,
  getAllBatchSrc,
  getSingleBatchSrc,
  deleteSingleBatchSrc,
  updateSingleBatchSrc,
} from '../services/batchService.js'

//GET all Batch
export const getAllBatch = asyncHandler(async (req, res) => {
  const batch = await getAllBatchSrc()
  // return makeResponse({
  //   res,
  //   status: 200,
  //   data: delivery,
  //   message: 'Product successfully fetched',
  // })
  res.status(200).json(batch)
})

//GET single Batch
export const getABatch = asyncHandler(async (req, res) => {
  const batch = await getSingleBatchSrc(req.params.id)
  // return makeResponse({
  //   res,
  //   status: 200,
  //   data: delivery,
  //   message: 'Products successfully fetched',
  // })
  res.status(200).json(batch)
})

//CREATE single batch
export const singleBatchCreate = asyncHandler(async (req, res) => {
  const batch = await createBatchSrc(req.body)
  // return makeResponse({
  //   res,
  //   status: 200,
  //   data: delivery,
  //   message: 'Product successfully created',
  // })
  res.status(200).json(batch)
})

//Delete single batch
export const singleBatchDelete = asyncHandler(async (req, res) => {
  const batch = await deleteSingleBatchSrc(req.params.id)
  // return makeResponse({
  //   res,
  //   status: 200,
  //   data: delivery,
  //   message: 'Product successfully deleted',
  // })
  res.status(200).json(batch)
})

//UPDATE single batch
export const singleBatchUpdate = asyncHandler(async (req, res) => {
  const batch = await updateSingleBatchSrc(req.params.id, req.body)
  // return makeResponse({
  //   res,
  //   status: 200,
  //   data: delivery,
  //   message: 'Product successfully updated',
  // })
  res.status(200).json(batch)
})
