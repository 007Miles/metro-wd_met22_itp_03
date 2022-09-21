import express from 'express'

import supplierRouter from './supplier.js'
import supplierMailRouter from './supplier_mail.js'
import supplyReqRouter from './supply_req.js'
import deliveryRouter from './delivery.js'

const router = express.Router()

router.use('/delivery', deliveryRouter)
router.use('/supplier', supplierRouter)
router.use('/supplierMailer', supplierMailRouter)
router.use('/supplyReq', supplyReqRouter)
export default router
