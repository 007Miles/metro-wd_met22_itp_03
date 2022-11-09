import express from 'express'

import {
  getABatch,
  getAllBatch,
  singleBatchCreate,
  singleBatchDelete,
  singleBatchUpdate,
  RemoveSingleBatch,
} from '../controllers/batchController.js'
const batchRouter = express.Router()

batchRouter.get('/getAllBatch', getAllBatch)
batchRouter.get('/getABatch/:id', getABatch)
batchRouter.post('/createABatch', singleBatchCreate)
batchRouter.delete('/deleteABatch/:id', singleBatchDelete)
batchRouter.patch('/updateBatch/:id', singleBatchUpdate)

batchRouter.delete('/RemoveSingleBatch/:id', RemoveSingleBatch)

export default batchRouter
