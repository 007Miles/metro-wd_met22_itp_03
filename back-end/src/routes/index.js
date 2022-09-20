import express from 'express'
import deliveryRouter from './delivery.js'

const router = express.Router()
import employee_router from './employee.js'


router.use('/employee', employee_router);
// router.use('/warehouse', warehouse_router);
// router.use('/role', role_router);

router.use('/delivery', deliveryRouter)


export default router




