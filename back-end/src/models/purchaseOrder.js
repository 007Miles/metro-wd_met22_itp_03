import mongoose from "mongoose";

const purchaseOrderSchema = mongoose.Schema(
    {
        id : {
          type: String,
          required: true,
          unique: true,  
          },
         payId: {
            type: String,
            required: true,     
            unique: true,        
          },
          warehouseId: {
            type: String,
            required: true,     
            unique: true,        
          },
          status : {
            type: String,
            required: true,
            unique: false,  
          },
          totalPrice: {
            type: Number,
            required: true,     
            unique: false,        
          }
          
        
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)

const purchaseOrdertable = mongoose.model('purchaseOrdertable', purchaseOrderSchema)
export default purchaseOrdertable
