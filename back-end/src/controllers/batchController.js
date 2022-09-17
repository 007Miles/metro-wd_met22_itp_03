import asyncHandler from '../middleware/async.js'

import {
  createBatchSrc,
  getSingleBatchSrc,
  deleteSingleBatchSrc,
  updateSingleBatchSrc,
} from '../services/batchService.js'

//GET all Batch

//GET single Batch
export const getABatch = asyncHandler(async (req, res) => {
  const batch = await getSingleBatchSrc(req.params.id)

  res.status(200).json(batch)
})

//CREATE single batch
export const singleBatchCreate = asyncHandler(async (req, res) => {
  const batch = await createBatchSrc(req.body)
  res.status(200).json(batch)
})

//Delete single batch
export const singleBatchDelete = asyncHandler(async (req, res) => {
  await deleteSingleBatchSrc(req.params.id)
  res.status(200)
  console.log('controller')
})

//UPDATE single batch
export const singleBatchUpdate = asyncHandler(async (req, res) => {
  const batch = await updateSingleBatchSrc(req.params.id, req.body)
  res.status(200).json(batch)
})
