const { jwtGenerate } = require('../utils/jwt');

const loginServices = async (req) => {
  const { email, password } = req.body;
  const jwt = await jwtGenerate(email, password);
  return jwt;
};

module.exports = {
  loginServices,
};
