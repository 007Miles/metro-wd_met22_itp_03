import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './routes/index.js'
import { connect } from './config/database.connection.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors()) //open for other application
app.use(express.json({ limit: '1mb' }))

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
)
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  connect() // function calling
})
