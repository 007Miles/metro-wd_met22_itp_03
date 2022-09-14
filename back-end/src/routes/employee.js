import express from 'express'
const router = express.Router()
import { employeeRegister, getEmployee, updateEmployee, deleteEmployee } from '../controllers/employee.js'

router.post('/registration', employeeRegister) //postman link
router.get('/:id', getEmployee)
router.put('/:id', updateEmployee)
router.delete('/:id', deleteEmployee)

export default router
