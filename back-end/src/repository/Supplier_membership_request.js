import SupplierMembershipRequest from '../models/Supplier_membership_request.js'
import mongoose from 'mongoose'

//Add schedules
export const createMembership = async (data) => {
  try {
    const membershipReq = new SupplierMembershipRequest({
      cred_id: data.cred_id,
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
