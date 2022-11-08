import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    measurement_unit: {
      type: String,
      required: true,
    },
    markupPrice: {
      type: Number,
      required: true,
    },
    storageCondition: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
