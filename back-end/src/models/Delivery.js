import mongoose from 'mongoose'

const DeliverySchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Warehouse',
      required: true,
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Warehouse',
      required: true,
    },
    driver_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Driver',
      required: true,
    },
    vehicle_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true,
    },
    start_datetime: {
      type: Date,
      require: true,
    },
    end_datetime: {
      type: Date,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

// QuestionSchema.plugin(mongoosePaginate)

DeliverySchema.index({ createdAt: 1 })

const Delivery = mongoose.model('Delivery', DeliverySchema)

Delivery.syncIndexes()

export default Delivery
