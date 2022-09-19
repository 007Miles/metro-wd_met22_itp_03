import mongoose from 'mongoose'

const supplyDropSchema = mongoose.Schema(
  {
    pay_id: {
      type: String,
      required: true,
      unique: true,
    },
    warehouse_id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    supply_drop_item: {
      type: {
        //Check Schedules.js repo and service files to code
        item_id: {
          type: Number,
        },
        prod_id: {
          type: String,
        },
        qty: {
          type: Number,
        },
        manu_date: {
          type: Date,
        },
        exp_date: {
          type: Date,
        },
      },
      required: true,
    },
  },
  // total_price: {       //derived attribute
  //   type: Number,
  //   required: false,
  // },

  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const SupplyDrop = mongoose.model('SupplyDrop', supplyDropSchema)
export default SupplyDrop
