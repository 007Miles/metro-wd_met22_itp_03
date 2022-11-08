import Role from '../models/role.js'
import mongoose from 'mongoose'

//Add New Role
export const createRole = async (details) => {
  console.log(details)
  try {
    const role = new Role({
      empId: details.empId,
      empName: details.empName,
      role: details.role,
      otHrs: details.otHrs,
      otRate: details.otRate,
      basicSalary: details.basicSalary,
      netSalary: details.netSalary
    })

    await role.save()
    return { msg: 'Role Create Succesfully' }
  } catch (error) {
    console.log(error)
    return { msg: 'Role Error' }
  }
}

//Get one Role Details
export const getRoleAccount = async (id) => {
  return await Role.findOne({empId: id})
}

//Get All Role Details
export const getRoles = async () => {
  try {
    const a = await Role.find().sort({ createdAt: -1 })
    console.log (a)
    return a
  } catch (error) {
    return { msg: 'no Role found' }
  }
}

//Update Role Details
export const updateRoleAccount = async (id, ob) => {
  try {
    await Role.findOneAndUpdate({empId: id}, ob)
    return Role.findOne({empId: id})
  } catch (error) {
    return { msg: 'update Error' }
  }
}