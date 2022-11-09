import mongoose from 'mongoose'

const roleSchema = mongoose.Schema(
  {
    empId: {
      type: String,
      require: true,
      unique: true,
    },
    empName: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      required: true,
    },
    otHrs: {
      type: Number,
      required: true,
    },
    otRate: {
      type: String,
      require: true,
    },
    basicSalary: {
      type: String,
      require: true,
    },
    netSalary: {
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
