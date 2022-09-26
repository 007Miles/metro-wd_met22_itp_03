import express from 'express'
import schedule_router from './Schedules.js'
import supplierRouter from './supplier.js'
import supplyReqRouter from './supplyReq.js'
import deliveryRouter from './delivery.js'
import batchRouter from './batch.js'
import employee_router from './employee.js'

const router = express.Router()

router.use('/employee', employee_router)
router.use('/delivery', deliveryRouter)
router.use('/batch', batchRouter)
router.use('/supplier', supplierRouter)
router.use('/supplyReq', supplyReqRouter)

router.use('/schedules', schedule_router)

export default router