require('dotenv').config();
const status = require('http-status');

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

module.exports = {
  bodyMessagesValidation,
};
