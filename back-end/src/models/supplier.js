import mongoose from 'mongoose'

const SupplierSchema = new mongoose.Schema(
  {
    business_name: {
      required: true,
      type: String,
      // unique: true,
    },
    cred_id: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      // unique: true,
    },
    address: {
      required: true,
      type: String,
      // unique: true,
    },
    email: {
      required: true,
      type: String,
      // unique: true,
    },
    phone: [
      {
        required: true,
        type: String,
        // unique: true,
      },
    ],
    registered_products: [
      {
        required: true,
        type: String,
      },
    ],
    rating: {
      required: false,
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updated: 'Updated_at' },
  }
)

const supplier = mongoose.model('supplier', SupplierSchema)

export default supplier
