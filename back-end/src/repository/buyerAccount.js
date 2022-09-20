import buyerAccount from '../models/buyerAccount.js'
import mongoose from 'mongoose'

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
    await buyerAcc.save()
    return { msg: 'account created' }
  } catch (error) {
    return { msg: 'account not created' }
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
    //return { msg: 'deletion successfull' }
  } catch (error) {
    return { msg: 'deletion not successfull' }
  }
}
