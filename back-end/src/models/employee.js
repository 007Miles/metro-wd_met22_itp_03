import mongoose from 'mongoose'

const employeeSchema = mongoose.Schema(
  {
    empName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    dob: {
      type: String,
      require: true,
    },
    empId: {
      type: String,
      require: true,
      unique: true,
    },
    nic: {
      type: String,
      require: true,
      unique: true,
    },
    gender: {
      type: String,
      require: true,
    },
    wareId: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },

  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Employee = mongoose.model('employee', employeeSchema)
export default Employee
