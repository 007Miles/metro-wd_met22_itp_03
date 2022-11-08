import asyncHandler from "../middleware/async.js"
import makeResponse from "../middleware/response.js"
import { createCred, authenticateCred } from "../services/auth.js"

export const login = asyncHandler(async (req, res) => {
  const ret = await authenticateCred(req.body)
  if (!ret)
    return makeResponse({ res, status: 401, message: "Invalid username and password combination"})
  else
    return makeResponse({ res, status: 201, message: "Login successful", data: ret })
})

export const create = asyncHandler(async (req, res) => {
  const cred = await createCred(req.body)
  return makeResponse({ res, status: 201, message: "User credential created", data: cred })
})
