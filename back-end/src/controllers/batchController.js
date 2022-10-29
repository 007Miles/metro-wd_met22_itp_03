import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'

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
  return makeResponse({
    res,
    status: 200,
    data: batch,
    message: 'Batches retrieved',
  })
})

//GET single Batch
export const getABatch = asyncHandler(async (req, res) => {
  const batch = await getSingleBatchSrc(req.params.id)
  return makeResponse({
    res,
    status: 200,
    data: batch,
    message: 'Batch retrieved',
  })
})

//CREATE single batch
export const singleBatchCreate = asyncHandler(async (req, res) => {
  const batch = await createBatchSrc(req.body)
  return makeResponse({
    res,
    status: 201,
    data: batch,
    message: 'Batch created',
  })
})

//Delete Single batch
export const singleBatchDelete = asyncHandler(async (req, res) => {
  const batch = await deleteSingleBatchSrc(req.params.id)
  return makeResponse({
    res,
    status: 204,
    data: batch,
    message: 'Batch deleted',
  })
})

//UPDATE single batch
export const singleBatchUpdate = asyncHandler(async (req, res) => {
  const batch = await updateSingleBatchSrc(req.params.id, req.body)
  return makeResponse({
    res,
    status: 200,
    data: batch,
    message: 'Update single Batch',
  })
})
