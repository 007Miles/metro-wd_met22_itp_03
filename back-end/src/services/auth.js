import { createToken } from "../config/jwt.js"

import { insertCred, findOneCred } from "../repository/auth.js"

export const createCred = async (cred) => {
  return await insertCred(cred)
}

export const authenticateCred = async ({ username, password }) => {
  // find the credential
  const cred = await findOneCred(username)
  if (!cred) return false
  
  // TODO: check hashed password
  if (password != cred.password) return false  
  
  // remove password from returned data
  delete cred.password

  // TODO: get user data to add to the token
  const role = {}
  const user = {}

  return { cred, user, role, access_token: createToken({ cred, user, role }) }
}
