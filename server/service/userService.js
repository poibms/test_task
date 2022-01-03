const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mailService');
const tokenService = require('./tokentService');
const UserDto = require('../dto/userDto');
const ApiError = require('../exeptions/api-error');

class userService {
  async signUp(login, email, password) {
    const checkLogin = await UserModel.findOne({login});
    if(checkLogin) {
      throw ApiError.BadRequest('User with such login has already been found');
    }
    const checkEmail = await UserModel.findOne({email});
    if(checkEmail) {
      throw ApiError.BadRequest('User with such email has already been found');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await UserModel.create({login, email, password: hashPassword, activationLink});
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/active/${activationLink}`);

    const userDto = new UserDto(user); //id, login, email, isActivated;
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto }
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if(!user) {
      throw ApiError.BadRequest("Incorrect activation link");
    }
    user.isActivated = true;
    await user.save()
  }

}

module.exports = new userService();