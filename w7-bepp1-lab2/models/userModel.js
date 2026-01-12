const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true  // No duplicate emails!
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true  // No duplicate phone numbers!
  }
})

module.exports = mongoose.model('User', userSchema)