import mongoose from 'mongoose'

const schedulesSchema = mongoose.Schema(
  {
    supplierID: {
      type: String,
      required: true,
      unique: true,
    },
    supplier_name: {
      type: String,
      required: true,
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
      type: Number,
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
    dayOfTheMonth: {
      type: Number,
      required: false,
    },
    time: {
      type: {
        hour: {
          type: Number,
          min: 0,
          max: 24,
        },
        minute: {
          type: Number,
          min: 0,
          max: 60,
        },
      },
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const dropSchedule = mongoose.model('schedules', schedulesSchema)
export default dropSchedule
