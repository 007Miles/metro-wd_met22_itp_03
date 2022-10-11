import Employee from '../models/employee.js'
import mongoose from 'mongoose'

//Add New Employee
export const createEmployeeAccount = async (details) => {
  console.log(details)
  try {
    const employee = new Employee({
      empName: details.empName,
      address: details.address,
      phone: details.phone,
      dob: details.dob,
      empId: details.empId,
      nic: details.nic,
      gender: details.gender,
      wareId: details.wareId,
      role: details.role,
      email: details.email,
    })

    await employee.save()
    return { msg: 'Account Create Succesfully' }
  } catch (error) {
    console.log(error)
    return { msg: 'Account Error' }
  }
}

//Get Employee Details
export const getEmployeeAccount = async (id) => {
  return await Employee.findById(mongoose.Types.ObjectId(id))
}

//Update Employee Details
export const updateEmployeeAccount = async (id, ob) => {
  try {
    await Employee.findByIdAndUpdate(id, ob)
    return { msg: 'update successfull' }
  } catch (error) {
    return { msg: 'update Error' }
  }
}

//Delete Employee Details
export const deleteEmployeeAccount = async (id) => {
  try {
    await Employee.findByIdAndDelete(id)
    return { msg: 'deletion successfull' }
  } catch (error) {
    return { msg: 'deletion not successfull' }
  }
}