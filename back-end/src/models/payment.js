import mongoose from 'mongoose'

const paymentSchema = mongoose.Schema(
  {
    bank: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    account_Number: {
      type: String,
      required: true,
      unique: true,
    },
    reference: {
      type: String, //?????????
    },
    inward_outward: {
      type: String, //????????????
    },
    date_and_time: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number, //?????????
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const paymentmodel = mongoose.model('payment', paymentSchema)
export default paymentmodel
