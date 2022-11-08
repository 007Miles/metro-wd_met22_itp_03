import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import { addRole, getRoleById, getAllRoles, updateRoleById } from '../services/role.js';

//Add New Role
export const roleRegister = asyncHandler(async (req, res) => {
    const a = await addRole(req.body)
    // res.send(a)
    return makeResponse({
      res,
      status: 201,
      data: a,
      message: 'New Role added',
    })
  })

//Get one Role Details
export const getRole = asyncHandler(async (req, res) => {
    const a = await getRoleById(req.params.id)
    // res.json(a)
    return makeResponse({
      res,
      status: 202,
      data: a,
      message: 'Get Role Details',
    })
  })
  
//Get All Role Details
export const getRoles = asyncHandler(async (req, res) => {
    const a = await getAllRoles()
    res.json(a)
})

//Update Role Details
export const updateRole = asyncHandler(async (req, res) => {
    const a = await updateRoleById(req.params.id, req.body)
    // res.send(a)
    return makeResponse({
      res,
      status: 203,
      data: a,
      message: 'Role Details Updated',
    })
  })