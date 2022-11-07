import mongoose from 'mongoose'

const roleSchema = mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    empId: {
      type: String,
      require: true,
      unique: true,
    },
    hrsPerDay: {
      type: Number,
      required: true,
    },
    otRate: {
      type: String,
      require: true,
    },
    deductRate: {
      type: String,
      require: true,
    },
    basicSalary: {
      type: String,
      require: true,
    },
    
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Role = mongoose.model('role', roleSchema)
export default Role
