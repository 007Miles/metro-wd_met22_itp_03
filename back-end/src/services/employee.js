import { createEmployeeAccount, getEmployeeAccount, updateEmployeeAccount, deleteEmployeeAccount } from '../repository/employee.js'

//Add New Employee
export const addEmployee = async ({ empName, address, phone, dob, empId, nic, gender, wareId, role, email }) => {

  const details = { empName, address, phone: Number(phone), dob: Date(dob), empId, nic, gender, wareId, role, email }

  const b = await createEmployeeAccount(details)
  // console.log('await', b)
  return b.msg
}

//Get Employee Details
export const getEmployeeById = async (id) => {
  return await getEmployeeAccount(id)
}

//Update Employee Details
export const updatemployeeById = async (id, ob) => {
  // console.log(ob)
  const a = await updateEmployeeAccount(id, ob)
  return a
}

//Delete Employee
export const deleteEmployeeById = async (id) => {
  return await deleteEmployeeAccount(id)
}