import dotenv from 'dotenv'
import express from 'express'

import DBcon from "./config/DB_connection.js";

import router from './routes/index.js'
import buyeracc from './routes/buyer.js'

dotenv.config()

const app = express()

app.use(express.json({ limit: '1mb' }))

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
)
app.use('/api', router)
app.use(buyeracc);

DBcon();

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
