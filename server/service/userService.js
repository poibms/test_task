const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mailService');

class userService {
  async signUp(login, email, password) {
    const checkLogin = await UserModel.findOne({login});
    if(checkLogin) {
      throw new Error('User with such login has already been found');
    }
    const checkEmail = await UserModel.findOne({email});
    if(checkEmail) {
      throw new Error('User with such email has already been found');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({login, email, hashPassword, activationLink});
    await mailService.sendActivationMail(email, activationLink);
  }
}

module.exports = new userService();