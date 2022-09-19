import mongoose from 'mongoose'

const supplyCancelSchema = mongoose.Schema(
  {
    //added extra field
    supplierID: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
    },
    // refund_pay_id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    reason: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at' },
  }
)

const SupplyCancel = mongoose.model('SupplyCancel', supplyCancelSchema)
export default SupplyCancel
