import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { isCelebrateError } from 'celebrate'

import router from './routes/index.js'

import connectDB from './config/dbConnect.js'
import makeResponse from './middleware/response.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors()) //open for other application
app.use(express.json({ limit: '1mb' }))

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
)
app.use('/api', router)


connectDB()

app.use((err, req, res, next) => {
  if (isCelebrateError(err)) {
    for (const [key, value] of err.details.entries()) {
      return makeResponse({
        res,
        status: 422,
        message: value.details[0].message,
      })
    }
  } else if (err.expose) {
    return makeResponse({ res, status: err.status, message: err.message })
  } else
    return makeResponse({
      res,
      status: 500,
      message: 'Internal server error',
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)

})
