import { celebrate, Segments } from 'celebrate'
import express from 'express'
import { employeeRegister, getEmployee, getEmployees, updateEmployee, deleteEmployee, employeeCheck } from '../controllers/employee.js'
import { createEmployeeSchema, viewEmployeeSchema, updateEmployeeSchema } from '../validations/employee.js'
const router = express.Router()

router.post('/addEmployee',celebrate({[Segments.BODY]:createEmployeeSchema}), employeeRegister) //postman link
router.get('/viewAllEmployees', getEmployees)
router.get('/viewEmployee/:employee_id',celebrate({ [Segments.PARAMS]: viewEmployeeSchema }) /*,employeeCheck*/ , getEmployee)
router.put('/updateEmployee/:employee_id',celebrate({ [Segments.PARAMS]: updateEmployeeSchema }), updateEmployee)
router.delete('/deleteEmployee/:employee_id', deleteEmployee)

export default router
