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
  { timestamps: true }
)

//module.exports = Product;
//module.exports = mongoose.model('Product',productSchema);

const Product = mongoose.model('Product', productSchema)

export default Product
