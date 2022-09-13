import mongoose from 'mongoose'

const schedulesSchema = mongoose.Schema({
  supplierID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier',
    required: true,
  },
  supplier_name: {
    type: String,
    required: true,
    unique: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  warehouse: {
    type: String,
    required: true,
  },
  weekly: {
    type: Boolean,
    required: true,
  },
  monthly: {
    type: Boolean,
    required: true,
  },
  yearly: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  dayOfTheWeek: {
    type: String,
    required: false,
  },
  time: {
    type: TimeRanges,
    required: true,
  },
})

module.exports = mongoose.model('Schedules', schedulesSchema)
