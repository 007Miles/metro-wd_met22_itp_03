import mongoose from 'mongoose'
import 'dotenv/config'

const DBcon = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connected successfully')
    })
    .catch((e) => {
      console.log('Database connection Error', e)
    })
}
export default DBcon
