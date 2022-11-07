import Employee from '../models/employee.js'
import mongoose from 'mongoose'

//Add New Employee
export const createEmployeeAccount = async (details) => {
  console.log(details)
  try {
    const employee = new Employee({
      empName: details.empName,
      cred_id: details.cred_id,
      address: details.address,
      phone: details.phone,
      dob: details.dob,
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

//Check if Employee exists
export const checkEmployee = async (id) => {
  //check for valid objectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { msg: 'No employee is available with this id' }
  }

  if ((await Employee.findById(mongoose.Types.ObjectId(id))) == null) {
    return { msg: 'No employee is available with this Employee_id' }
  } else {
    next()
  }
}

//Get one Employee Details
export const getEmployeeAccount = async (id) => {
  return await Employee.findById(mongoose.Types.ObjectId(id))
}

//Get All Employee Details
export const getEmployees = async (params) => {
  try {
    let filter = {}
    if(params.empName){
      filter.empName = {'$regex' : params.empName, '$options' : 'i'}
    }
    if(params.role){
      filter.role = params.role
    }
    const a = await Employee.find(filter).sort({ createdAt: -1 })
    console.log (a)
    return a
  } catch (error) {
    return { msg: 'no Employee found' }
  }
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