import { createEmployeeAccount, getEmployeeAccount, getEmployees, updateEmployeeAccount, deleteEmployeeAccount, checkEmployee } from '../repository/employee.js'

//Add New Employee
export const addEmployee = async ({ empName, cred_id, address, phone, dob, nic, gender, wareId, role, email }) => {

  const details = { empName, cred_id, address, phone: Number(phone), dob: Date(dob), nic, gender, wareId, role, email }

  return await createEmployeeAccount(details)
}

//Check Data Of One Employee
export const checkEmployeeById = async (id) => {
  return await checkEmployee(id)
}

//Get one Employee Details
export const getEmployeeById = async (id) => {
  return await getEmployeeAccount(id)
}

//Get All Employee Details
export const getAllEmployees = async () => {
  return await getEmployees()
}

//Update Employee Details
export const updatemployeeById = async (id, ob) => {
  return await updateEmployeeAccount(id, ob)
}

//Delete Employee
export const deleteEmployeeById = async (id) => {
  return await deleteEmployeeAccount(id)
}