const status = require('http-status');
const { getMessagesServices } = require('../services/messagesServices');

const getMessagesController = async (req, res) => {
  try {
    const messages = await getMessagesServices();
    return res.status(status.OK).json(messages);
  } catch (error) {
    console.log(error);
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

// const insertMessagesController = async (req, res) => {
//   try {
//     const result = await Mensagens.create({
//       nome: req.body.nome,
//       mensagem: req.body.mensagem,
//     });
//     return res.status(CREATED).json({
//       mensagem: 'Mensagem cadastrada com sucesso!',
//     });
//   } catch (e) {
//     console.log(e);
//     return res.status(BAD_REQUEST).json({ erro: e });
//   }
// };

module.exports = {
  getMessagesController,
  // insertMessagesController,
};
