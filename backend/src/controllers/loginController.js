const status = require('http-status');
const { loginServices } = require('../services/loginServices');

const loginController = async (req, res) => {
  try {
    const jwt = await loginServices(req);
    return res.status(jwt.status).json({
      message: jwt.message,
    });
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

module.exports = {
  loginController,
};
