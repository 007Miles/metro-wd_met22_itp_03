import express from 'express'

import productRouter from './products.js'
import buyerAccount from './buyerAccount.js'
import samplceRouter from './Leave.js'
import schedule_router from './Schedules.js'
import supplierRouter from './supplier.js'
import supplyReqRouter from './supplyReq.js'
import batchRouter from './batch.js'
import employee_router from './employee.js'
import warehouse_router from './warehouse.js'
import att from './attendance.js'
import role_router from './role.js'
import membership_router from './Supplier_membership_request.js'
import deliveryRouter from './delivery.js'

const router = express.Router()

router.use('/Buyer', buyerAccount)
router.use('/leaveReq', samplceRouter)
router.use('/employee', employee_router)
router.use('/warehouse', warehouse_router)
router.use('/delivery', deliveryRouter)
router.use('/product', productRouter)
router.use('/batch', batchRouter)
router.use('/supplier', supplierRouter)
router.use('/supplyReq', supplyReqRouter)
router.use('/AttendancesController', att)
router.use('/role', role_router)
router.use('/schedules', schedule_router)
router.use('/request', membership_router)

export default router
