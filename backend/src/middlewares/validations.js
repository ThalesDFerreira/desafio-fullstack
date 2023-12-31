require('dotenv').config();
const status = require('http-status');
const Users = require('../database/models/users');

const bodyMessagesValidation = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: 'Body não pode estar vazio!' });
  } else if (!req.body.message) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: 'Body não possui a chave message!' });
  } else {
    next();
  }
};

const bodyUsersValidation = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: 'Body não pode estar vazio!' });
  }
  if (!req.body.email || !req.body.password) {
    const str = !req.body.email ? 'email' : 'password';
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Body não possui a chave ${str}` });
  }
  let USER;
  if (req.body.email) {
    const [userSearch] = await Users.findAll({
      where: { email: req.body.email },
    });
    USER = userSearch;
  }
  if (USER) {
    return res
      .status(status.CONFLICT)
      .json({ message: 'Usuário já cadastrado!' });
  } else {
    next();
  }
};

const bodyEditUsersValidation = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res
      .status(status.BAD_REQUEST)
      .json({ mensagem: 'Body não pode estar vazio!' });
  }
  if (!req.body.email || !req.body.password) {
    const str = !req.body.email ? 'email' : 'password';
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Body não possui a chave ${str}` });
  }
  next();
};

const bodyLoginValidation = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: 'Body não pode estar vazio!' });
  } else if (!req.body.email || !req.body.password) {
    const str = !req.body.email ? 'email' : 'password';
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Body não possui a chave ${str}` });
  }
  let USER;
  if (req.body.email) {
    const [userSearch] = await Users.findAll({
      where: { email: req.body.email },
    });
    USER = userSearch;
  }
  if (!USER) {
    return res
      .status(status.UNPROCESSABLE_ENTITY)
      .json({ message: 'Usuário não encontrado!' });
  } else {
    next();
  }
};

const authValidation = (req, res, next) => {
  const apiKeyExists = !req.headers.apikey;
  const apiKeyAuth = req.headers.apikey !== process.env.API_KEY;

  if (apiKeyExists && apiKeyAuth) {
    return res
      .status(status.UNAUTHORIZED)
      .json({ message: 'Usuário não autorizado!' });
  }
  next();
};

module.exports = {
  bodyMessagesValidation,
  bodyUsersValidation,
  bodyEditUsersValidation,
  bodyLoginValidation,
  authValidation,
};
