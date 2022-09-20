import { createMembership } from '../repository/Supplier_membership_request.js'

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
