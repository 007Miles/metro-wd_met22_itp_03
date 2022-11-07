import {
  createMembership,
  getMembReq,
  getAllMembReq,
  putMembReq,
  delMembReq,
} from '../repository/Supplier_membership_request.js'

//Add schedules
export const addMembership = async ({
  cred_id,
  verified,
  business_name,
  email,
  registered_products,
  phone,
  address,
}) => {
  const data = {
    cred_id,
    verified: Boolean(verified),
    business_name,
    email,
    registered_products,
    phone,
    address,
  }
  const x = await createMembership(data)
  //console.log('Service test', x)
  return x.msg
}

//Get one supplier membership request
export const getMembershipReqById = async (id) => {
  return await getMembReq(id)
}

//Get all membership requests
export const getAllMembershipReqs = async () => {
  return await getAllMembReq()
}

//Update membership request
export const updateMembershipReqById = async (id, ob) => {
  const ans = await putMembReq(id, ob)
  return ans
}

//Delete membership request
export const deleteMembershipReqById = async (id) => {
  return await delMembReq(id)
}
