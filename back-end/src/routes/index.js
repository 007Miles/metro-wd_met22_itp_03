import express from 'express'

import supplierRouter from './supplier.js'
import supplyReqRouter from './supplyReq.js'
import deliveryRouter from './delivery.js'
import batchRouter from './batch.js'

const router = express.Router()

router.use('/delivery', deliveryRouter)
router.use('/batch', batchRouter)
router.use('/supplier', supplierRouter)
router.use('/supplyReq', supplyReqRouter)
export default router
