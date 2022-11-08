import { addEmployee } from "./employee.js"
import { insertCred } from "../repository/auth.js"

export const addDriver = async ({ username, password, empName, address, phone, dob, nic, gender, wareId, role, email }) => {
  const credential = await insertCred({username, password, uuser_id: null, role: null})
  const employee = await addEmployee({ empName, cred_id: credential._id, address, phone, dob, nic, gender, wareId, role, email })

  return { credential, employee }
}
