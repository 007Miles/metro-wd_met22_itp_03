import mongoose from 'mongoose'

const batchSchema = new mongoose.Schema(
  {
    prod_id: {
      type: String,
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
    supplier_id: {
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
  { timestamps: true }
)

const Batch = mongoose.model('Batch', batchSchema)

export default Batch
