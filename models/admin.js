const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  Name: {
    type: String,
    require: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "customer"],
    default: "customer"
  },
}, { timestamps: true })


userSchema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.passwordHash)
}

module.exports = mongoose.model("User", userSchema)
