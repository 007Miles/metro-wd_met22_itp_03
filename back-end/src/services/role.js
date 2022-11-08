import { createRole, getRoleAccount, getRoles, updateRoleAccount } from '../repository/role.js';

//Add New Role
export const addRole = async ({ empId, empName, role, otHrs, otRate, basicSalary, netSalary }) => {

    const details = { empId, empName, role, otHrs, otRate, basicSalary, netSalary }
  
    const b = await createRole(details)
    // console.log('await', b)
    return b.msg
}

//Get one Role Details
export const getRoleById = async (id) => {
    return await getRoleAccount(id)
}

//Get All Role Details
export const getAllRoles = async () => {
    return await getRoles()
}

//Update Warehouse Details
export const updateRoleById = async (id, ob) => {
    // console.log(ob)
    const a = await updateRoleAccount(id, ob)
    return a
  }