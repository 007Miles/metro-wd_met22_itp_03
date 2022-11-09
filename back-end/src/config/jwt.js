import jwt from 'jsonwebtoken'

export const createToken = (user) => {
  return jwt.sign({ data: user }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

export const decodeToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}
