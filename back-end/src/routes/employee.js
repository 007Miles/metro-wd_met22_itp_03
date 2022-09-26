import { celebrate, Segments } from 'celebrate'
import express from 'express'
const router = express.Router()
import { employeeRegister, getEmployee, updateEmployee, deleteEmployee } from '../controllers/employee.js'
import { createEmployeeSchema } from '../validations/employee.js'

router.post('/registration',celebrate({[Segments.BODY]:createEmployeeSchema}), employeeRegister) //postman link
router.get('/:id', getEmployee)
router.put('/:id', updateEmployee)
router.delete('/:id', deleteEmployee)

export default router
