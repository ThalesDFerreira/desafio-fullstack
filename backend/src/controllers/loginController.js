const status = require('http-status');
const { loginServices } = require('../services/loginServices');

const loginController = async (req, res) => {
  try {
    const jwt = loginServices(req);
    jwt.then((data) => {
      return res.status(data.status).json({
        message: data.message,
      });
    });
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

module.exports = {
  loginController,
};
