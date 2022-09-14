import asyncHandler from '../middleware/async.js'
import { addEmployee, getEmployeeById, updatemployeeById, deleteEmployeeById } from '../services/employee.js'

//Add New Employee
export const employeeRegister = asyncHandler(async (req, res) => {
  const a = await addEmployee(req.body)
  // console.log('Controller', a)
  res.send(a)
})

//Get Employee Details
export const getEmployee = asyncHandler(async (req, res) => {
  const a = await getEmployeeById(req.params.id)
  res.json(a)
})

//Update Employee Details
export const updateEmployee = asyncHandler(async (req, res) => {
  const a = await updatemployeeById(req.params.id, req.body)
  res.send(a)
})

// Delete Employee Details
export const deleteEmployee = asyncHandler(async (req, res) => {
  const a = await deleteEmployeeById(req.params.id)
  res.send(a)
})
