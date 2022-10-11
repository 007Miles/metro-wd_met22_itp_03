import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import { addEmployee, getEmployeeById, updatemployeeById, deleteEmployeeById } from '../services/employee.js'

//Add New Employee
export const employeeRegister = asyncHandler(async (req, res) => {
  const a = await addEmployee(req.body)
  // res.send(a)
  return makeResponse({
    res,
    status: 201,
    data: a,
    message: 'New employee added',
  })
})

//Get Employee Details
export const getEmployee = asyncHandler(async (req, res) => {
  const a = await getEmployeeById(req.params.id)
  // res.json(a)
  return makeResponse({
    res,
    status: 202,
    data: a,
    message: 'Get Employee Details',
  })
})

//Update Employee Details
export const updateEmployee = asyncHandler(async (req, res) => {
  const a = await updatemployeeById(req.params.id, req.body)
  // res.send(a)
  return makeResponse({
    res,
    status: 203,
    data: a,
    message: 'Employee Details Updated',
  })
})

// Delete Employee Details
export const deleteEmployee = asyncHandler(async (req, res) => {
  const a = await deleteEmployeeById(req.params.id)
  // res.send(a)
  return makeResponse({
    res,
    status: 204,
    data: a,
    message: 'Delete Employee Details',
  })
})
