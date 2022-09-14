import mongoose from 'mongoose'
import config from './index.js'

let database

const connect = async () => {
  const MONGODB_URL = config.DB_CONNECTION_STRING

  if (database) return

  mongoose
    .connect(MONGODB_URL)
    .then((connection) => {
      database = connection
      console.log('Database Connected') //db connect
    })
    .catch((err) => {
      console.log('DB not Connected') // not connected to db
    })
}

export { connect }
