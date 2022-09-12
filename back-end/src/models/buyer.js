import mongoose from 'mongoose'

const buyerSchema = mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    credentialId: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const buyerAccount = mongoose.model('buyeraccount', buyerSchema)
export default buyerAccount
