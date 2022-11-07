import mongoose from 'mongoose'

const warehouseSchema = mongoose.Schema(
  {
    wareId: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    storageCond: {
      type: String,
      required: true,
    },

  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Warehouse = mongoose.model('warehouse', warehouseSchema)
export default Warehouse
