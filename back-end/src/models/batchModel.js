import mongoose from 'mongoose'

const batchSchema = new mongoose.Schema(
  {
    prod_Name: {
      type: String,
      required: true,
    },
    warehouse_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    exp_date: {
      type: Date,
      required: true,
    },
    manu_date: {
      type: Date,
      required: true,
    },
    arrived_date: {
      type: Date,
      required: true,
    },
    supplier_Name: {
      type: String,
      required: true,
    },
    buy_price: {
      type: Number,
      required: true,
    },
    sell_price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Batch = mongoose.model('Batch', batchSchema)

export default Batch
