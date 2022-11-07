import mongoose from 'mongoose'

const orderCancelSchema = mongoose.Schema(
  {
    cancelDate: {
      type: Date,
      required: true,
    },
    refund_payment_id: {
      type: mongoose.Schema.Types.ObjectId(),
      required: true,
      unique: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const orderCancel = mongoose.model('cancelorder', orderCancelSchema)
export default orderCancel
