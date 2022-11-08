import makeResponse from "../middleware/response.js"
import { addDriver } from "../services/driver.js"

export const createDriver = async (req, res) => {
  const data = await addDriver(req.body)
  return makeResponse({res, status: 201, data, message: "Driver created successfully"})
}
