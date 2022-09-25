import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import DBcon from './config/DB_connection.js'

import router from './routes/index.js'

dotenv.config()

const app = express()

app.use(cors({ origin: 'http://localhost:3001' }))
app.use(express.json({ limit: '1mb' }))
//app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
)

app.use('/api', router)

DBcon()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
