import express from 'express'
const router = express.Router()
import employee_router from './employee.js'

router.use('/employee', employee_router);
//router.use('/roles', employee_router);

export default router




