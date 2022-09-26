import courierAccount from '../models/courier.js'  
import mongoose from 'mongoose'

export const createCourierAccount = async (details) => {
  try {
    const courierAcc = new courierAccount({
      businessName: details.businessName,
      address: details.address,
      phone: details.phone,
      email: details.email,
      credentialId: details.credentialId,
      transportConditions: details.transportConditions,
      OperationalArea: details.OperationalArea,
    })
    
    await courierAcc.save()
    return { msg: 'account created' }
  } catch (error) {
    return { msg: 'account not created' }
  }
}
console.log("connected  repo successfully");


export const getCourierAccount = async (id) => {
  return await courierAccount.findById(mongoose.Types.ObjectId(id))
}

export const updateCourierusingId = async (id, ob) => {
  try {
    const res = await courierAccount.findById(id)
    console.log(ob)
    Object.assign(res, ob)
    await res.save()
    return { msg: 'update successfull' }
  } catch (error) {
    return { msg: 'updation not successfull'+ error }
  }
}

export const deleteCourierusingId = async (id) => {
  try {
    await courierAccount.findByIdAndDelete(id)
    return { msg: 'deletion successfull' }
  } catch (error) {
    return { msg: 'deletion not successfull' }
  }
}
