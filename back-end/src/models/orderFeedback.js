import mongoose from 'mongoose'

const orderFeedbackSchema = mongoose.Schema(
  {
    buyer_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    batch_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    rating: {
      type: Number,
    },
    feedback: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const orderFeedback = mongoose.model('orderfeedback', orderFeedbackSchema)
export default orderFeedback
