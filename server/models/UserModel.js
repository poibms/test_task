const { Schema, model } = require('mongoose');

const UserModel = new Schema({
  login: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isActivated: {type: Boolean, default: false}
})

module.exports = model('User', UserModel);