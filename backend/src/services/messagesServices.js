const Messages = require('../database/models/messages');

const getMessagesServices = async () => {
    const messages = await Messages.findAll();
    return messages;
};

module.exports = {
  getMessagesServices,
};
