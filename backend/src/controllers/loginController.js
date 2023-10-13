const status = require('http-status');
const { loginServices } = require('../services/loginServices');

const loginController = async (req, res) => {
  try {
    const jwt = loginServices(req);
    return res.status(status.OK).json({
      mensagem: 'Usuário logado com sucesso!',
      token: jwt,
    });
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

module.exports = {
  loginController,
};
