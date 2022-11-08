import SupplierMembershipRequest from '../models/Supplier_membership_request.js'
import mongoose from 'mongoose'

//Add schedules
export const createMembership = async (data) => {
  try {
    const membershipReq = new SupplierMembershipRequest({
      // cred_id: data.cred_id,
      verified: data.verified,
      business_name: data.business_name,
      email: data.email,
      registered_products: data.registered_products,
      phone: data.phone,
      address: data.address,
    })
    await membershipReq.save()
    return { msg: 'New Membership request sent' }
  } catch (error) {
    return { msg: 'New membership request not sent' }
  }
}

//Get one supplier membership request
export const getMembReq = async (id) => {
  if (
    (await SupplierMembershipRequest.findById(mongoose.Types.ObjectId(id))) ==
    null
  ) {
    return { msg: 'No records on a membership request for this id' }
  }
  try {
    return await SupplierMembershipRequest.findById(mongoose.Types.ObjectId(id))
  } catch (error) {
    return { msg: 'No records on a membership request for this id' }
  }
}

//Get all membership requests
export const getAllMembReq = async () => {
  try {
    return await SupplierMembershipRequest.find({}).sort({ createdAt: -1 })
  } catch (error) {
    return { msg: 'No supplier membership requests available' }
  }
}

//Update membership request
export const putMembReq = async (id, ob) => {
  try {
    await SupplierMembershipRequest.findByIdAndUpdate(id, ob)
    return { msg: 'Supplier membership updated successfully' }
  } catch (error) {
    return { msg: 'Supplier membership update failed' }
  }
}

//Delete membership request
export const delMembReq = async (id) => {
  if (
    (await SupplierMembershipRequest.findById(mongoose.Types.ObjectId(id))) ==
    null
  ) {
    return { msg: 'No records on a membership request for this id' }
  }

  try {
    await SupplierMembershipRequest.findByIdAndDelete(id)
    return { msg: 'Supplier membership request deleted successfully' }
  } catch (error) {
    return { msg: 'Supplier membership request deletion failed' }
  }
}
