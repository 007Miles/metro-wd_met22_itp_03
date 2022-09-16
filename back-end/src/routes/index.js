import express from 'express'
const router = express.Router()
import employee_router from './employee.js'

router.use('/employee', employee_router);
// router.use('/warehouse', warehouse_router);
// router.use('/role', role_router);

export default router




