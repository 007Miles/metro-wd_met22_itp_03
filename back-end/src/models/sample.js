import mongoose from 'mongoose'

const SampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    num: {
      type: Number,
      required: true,
      unique: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

// QuestionSchema.plugin(mongoosePaginate)

QuestionSchema.index({ createdAt: 1 })

const Sample = mongoose.model('Question', SampleSchema)

Question.syncIndexes()

export default Sample
