import mongoose from 'mongoose'
import {
  insertBuyerDetails,
  readSpecificBuyerDetails,
  updateBuyer,
  deleteBuyer,
  insertCredentialDetails,
} from '../repository/buyerAccount.js'

export const addBuyerDetails = async ({
  businessName,
  username,
  password,
  email,
  phone,
  address,
  address_line2,
  city,
}) => {
  const details = {
    businessName,
    email,
    phone,
    address,
    address_line2,
    city,
    credentialId: null,
  }
  const bDet = await insertBuyerDetails(details)
  const buyerID = bDet._id
  const credentialDetails = { username, password, buyerID }
  const res = await insertCredentialDetails(credentialDetails)
  const x = await updateBuyer(buyerID, { credentialId: res._id })
  return x
}

export const getSpecificBuyerDetails = async (id) => {
  return await readSpecificBuyerDetails(id)
}

export const updateBuyerDetails = async (id, ob) => {
  return await updateBuyer(id, ob)
}

export const deleteBuyerDetails = async (id) => {
  return await deleteBuyer(id)
}
