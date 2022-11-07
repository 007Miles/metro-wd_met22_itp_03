import express from 'express'

import buyerAccount from './buyerAccount.js'
import samplceRouter from './Leave.js'
import schedule_router from './Schedules.js'
import supplierRouter from './supplier.js'
import supplyReqRouter from './supplyReq.js'
import batchRouter from './batch.js'
import employee_router from './employee.js'
import membership_router from './Supplier_membership_request.js'

const router = express.Router()

router.use('/Buyer', buyerAccount)
router.use('/leaveReq', samplceRouter)
router.use('/employee', employee_router)
router.use('/delivery', deliveryRouter)
router.use('/batch', batchRouter)
router.use('/supplier', supplierRouter)
router.use('/supplyReq', supplyReqRouter)
router.use('/schedules', schedule_router)
router.use('/request', membership_router)

export default router
