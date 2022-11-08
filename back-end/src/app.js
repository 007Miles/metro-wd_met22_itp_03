import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { isCelebrateError } from 'celebrate'

import router from './routes/index.js'
import connectDB from './config/dbConnect.js'
import makeResponse from './middleware/response.js'

dotenv.config()

const app = express()

app.use(express.json({ limit: '1mb' }))
app.use(cors())

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
)
app.use('/api', router)

connectDB()

// error responses
// app.use((err, req, res, next) => {
//   if (err.expose) {
//     // for exposable (mainly bad request) erros
//     return makeResponse({ res, status: err.status, message: err.message })
//   } else if (err.name == 'TokenExpiredError') {
//     // JWT token expired
//     return makeResponse({ res, status: 401, message: 'Access token expired' })
//   } else if (isCelebrateError(err)) {
//     // validation errors
//     for (const [key, value] of err.details.entries()) {
//       return makeResponse({
//         res,
//         status: 422,
//         message: value.details[0].message,
//       })
//     }
//   } else if (err.name == 'MongoServerError' && err.code === 11000) {
//     // for duplicate unique keys when inserting to db
//     const key = Object.keys(err.keyValue)[0]
//     return makeResponse({
//       res,
//       status: 400,
//       message: `The ${key} ${err.keyValue[key]} is already taken`,
//     })
//   } else {
//     // default error response
//     return makeResponse({ res, status: 500, message: 'Internal server error' })
//   }
// })

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
