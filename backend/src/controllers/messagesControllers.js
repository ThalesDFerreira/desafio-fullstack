const status = require('http-status');
const {
  getMessagesServices,
  insertMessagesServices,
} = require('../services/messagesServices');

const getMessagesController = async (req, res) => {
  try {
    const messages = await getMessagesServices();
    return res.status(status.OK).json(messages);
  } catch (error) {
    console.log(error);
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

const insertMessagesController = async (req, res) => {
  const { idClient, message } = req.body;
  try {
    const result = await insertMessagesServices(idClient, message);
    return res.status(status.CREATED).json(result);
  } catch (error) {
    console.log(error);
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

module.exports = {
  getMessagesController,
  insertMessagesController,
};
