import mongoose from 'mongoose'

const courierSchema = mongoose.Schema(
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
    transportConditions: {
        type: String,
        require: true,
        unique: false
    },
    OperationalArea: {
        type: String,
        require: true,
        unnique: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const courierAccount = mongoose.model('courieraccount', courierSchema)
export default courierAccount

console.log("connected  modles successfully");