import mongoose from 'mongoose'

import buyerAccount from '../models/buyerAccount.js'
import Credential from '../models/credential.js'

export const insertBuyerDetails = async (details) => {
  try {
    const buyerAcc = new buyerAccount({
      businessName: details.businessName,
      email: details.email,
      phone: details.phone,
      address: details.address,
      address_line2: details.address_line2,
      city: details.city,
      credentialId: details.credentialId,
    })
    return await buyerAcc.save()
  } catch (error) {
    return error
  }
}

export const insertCredentialDetails = async (credDetails) => {
  console.log(credDetails)
  try {
    const cred = new Credential({
      user_id: credDetails.buyerID,
      role: 'buyer',
      username: credDetails.username,
      password: credDetails.password,
    })
    return await cred.save()
  } catch (error) {
    return error
  }
}

export const readSpecificBuyerDetails = async (id) => {
  return await buyerAccount.findById(mongoose.Types.ObjectId(id))
}

export const updateBuyer = async (id, ob) => {
  try {
    return await buyerAccount.findByIdAndUpdate(id, ob, { new: true })
  } catch (error) {
    console.log(error)
  }
}

export const deleteBuyer = async (id) => {
  try {
    return await buyerAccount.findByIdAndDelete(id)
  } catch (error) {
    return { msg: 'deletion not successfull' }
  }
}
