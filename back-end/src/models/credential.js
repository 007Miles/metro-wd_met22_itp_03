import mongoose from 'mongoose'

const CredentialSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

// QuestionSchema.plugin(mongoosePaginate)

CredentialSchema.index({ createdAt: 1 })

const Credential = mongoose.model('Credential', CredentialSchema)

Credential.syncIndexes()

export default Credential
