import express from 'express'
import deliveryRouter from './delivery.js'
import batchRouter from './batch.js'

const router = express.Router()

router.use('/delivery', deliveryRouter)
router.use('/batch', batchRouter)

export default router
