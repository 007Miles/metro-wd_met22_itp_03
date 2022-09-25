import mongoose from 'mongoose'

const buyerAccountSchema = mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    address_line2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    credentialId: {
      type: String,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const buyerAccount = mongoose.model('buyeraccount', buyerAccountSchema)
export default buyerAccount
