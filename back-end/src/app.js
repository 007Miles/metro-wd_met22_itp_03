import dotenv from 'dotenv'
import express from 'express'
//import router from './routes/index.js'
import batchRouter from './routes/batch.js'
import connectDB from './config/dbConnect.js'

dotenv.config()

const app = express()
app.use(express.json())

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
)
app.use('/api/batch', batchRouter)

connectDB()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
