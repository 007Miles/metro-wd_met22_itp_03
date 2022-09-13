import dotenv from 'dotenv'
import express from 'express'

import router from './routes/index.js'
import DBconnection from "./config/DB_connection.js"

dotenv.config()

const app = express()

app.use(express.json({ limit: '1mb' }))

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
)
app.use('/api', router)

const port = process.env.PORT || 3000 // use port 3000 or use a available port

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
  DBconnection()
})
