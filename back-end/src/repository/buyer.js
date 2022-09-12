import buyerAccount from '../models/buyer.js'
import mongoose from 'mongoose'

export const createBuyerAccount = async (details) => {
  try {
    const buyerAcc = new buyerAccount({
      businessName: details.businessName,
      address: details.address,
      phone: details.phone,
      email: details.email,
      credentialId: details.credentialId,
    })
    await buyerAcc.save()
    return { msg: 'account created' }
  } catch (error) {
    return { msg: 'account not created' }
  }
}

export const getBuyerAccount = async (id) => {
  return await buyerAccount.findById(mongoose.Types.ObjectId(id))
}

export const updateBuyerusingId = async (id, ob) => {
  try {
    const res = await buyerAccount.findById(id)
    //console.log(ob)
    Object.assign(res, ob)
    await res.save()
    return { msg: 'update successfull' }
  } catch (error) {
    return { msg: 'updation not successfull' }
  }
}

export const deleteBuyerusingId = async (id) => {
  try {
    await buyerAccount.findByIdAndDelete(id)
    return { msg: 'deletion successfull' }
  } catch (error) {
    return { msg: 'deletion not successfull' }
  }
}
