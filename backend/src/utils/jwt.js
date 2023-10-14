require('dotenv').config();
const status = require('http-status');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../database/models/users');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: process.env.EXPIRESIN,
  algorithm: process.env.ALGORITHM,
};

const jwtGenerate = async (email, password) => {
  const [userSearch] = await Users.findAll({
    where: { email: email },
  });
  const isMatch = bcrypt.compareSync(password, userSearch.dataValues.password);

  if (!isMatch) {
    return {
      status: status.UNAUTHORIZED,
      message: 'Usuário ou Senha incorretos!',
    };
  }
  
  const {
    dataValues: { password: passBD, ...otherInfo },
  } = userSearch;
  return {
    status: status.OK,
    message: jwt.sign({ data: otherInfo }, secret, jwtConfig),
  };
};

const encryptPass = async (req) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(req.body.password, salt);
};

module.exports = {
  jwtGenerate,
  encryptPass,
};
