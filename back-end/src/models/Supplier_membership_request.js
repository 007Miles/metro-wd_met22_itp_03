import mongoose from 'mongoose'

const supplierMembershipSchema = mongoose.Schema(
  {
    // cred_id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    verified: {
      type: Boolean,
      required: false,
    },
    business_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    registered_products: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const SupplierMembershipRequest = mongoose.model(
  'SupplierMembershipRequest',
  supplierMembershipSchema
)
export default SupplierMembershipRequest
