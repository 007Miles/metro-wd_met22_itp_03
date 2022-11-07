import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import { addEmployee, getEmployeeById, getAllEmployees, updatemployeeById, deleteEmployeeById, checkEmployeeById } from '../services/employee.js'

//Add New Employee
export const employeeRegister = asyncHandler(async (req, res) => {
  const a = await addEmployee(req.body)
  // res.send(a)
  return makeResponse({
    res,
    status: 201,
    data: a,
    message: 'New Employee Added',
  })
})

//check Employee id exists
export const employeeCheck = asyncHandler(async (req, res, next) => {
  const ans = await checkEmployeeById(req.params.employee_id)

  res.status(404).json(ans)
})

//Get one Employee Details
export const getEmployee = asyncHandler(async (req, res) => {
  const a = await getEmployeeById(req.params.employee_id)
  // res.json(a)
  return makeResponse({
    res,
    status: 202,
    data: a,
    message: 'Get Employee Details',
  })
})

//Get All Employee Details
export const getEmployees = asyncHandler(async (req, res) => {
  const a = await getAllEmployees()
  res.json(a)
  // return makeResponse({
  //   res,
  //   status: 202,
  //   data: a,
  //   message: 'Get All Employee Details',
  // })
})

//Update Employee Details
export const updateEmployee = asyncHandler(async (req, res) => {
  const a = await updatemployeeById(req.params.employee_id, req.body)
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
  const a = await deleteEmployeeById(req.params.employee_id)
  // res.send(a)
  return makeResponse({
    res,
    status: 204,
    data: a,
    message: 'Delete Employee Details',
  })
})
