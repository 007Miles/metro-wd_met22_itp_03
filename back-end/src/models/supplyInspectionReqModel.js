import mongoose from 'mongoose'

const inspectionReqSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    supply_id: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      // unique: true,
    },
    status: {
      required: true,
      type: String,
    },
    priority: {
      required: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updated: 'Updated_at' },
  }
)

const inspectionRequest = mongoose.model(
  'inspectionRequest',
  inspectionReqSchema
)

export default inspectionRequest
