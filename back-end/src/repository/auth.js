import mongoose from "mongoose"

import Credential from "../models/credential.js"

export const insertCred = async (credential) => {
  const credToInsert = new Credential(credential)
  const cred = await credToInsert.save()
  return cred
}

export const findOneCred = async (username) => {
  return await Credential.findOne({ username }).lean()
}
