import express from 'express'

import supplierRouter from './supplier.js'
import supplyReqRouter from './supplyReq.js'
import deliveryRouter from './delivery.js'
import batchRouter from './batch.js'
import employee_router from './employee.js'
import warehouse_router from './warehouse.js'
import att from './attendance.js'
import role_router from './role.js'

const router = express.Router()

router.use('/employee', employee_router)
router.use('/warehouse', warehouse_router)
router.use('/delivery', deliveryRouter)
router.use('/batch', batchRouter)
router.use('/supplier', supplierRouter)
router.use('/supplyReq', supplyReqRouter)
router.use('/AttendancesController', att)
router.use('/role', role_router)

export default router
