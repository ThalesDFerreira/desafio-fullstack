const Users = require('../database/models/users');
const { encryptPass } = require('../utils/jwt');

const getUsersServices = async () => {
  const users = await Users.findAll();
  return users;
};

const createUserServices = async (req) => {
  let encryptedPass = await encryptPass(req);
  const result = await Users.create({
    email: req.body.email,
    password: encryptedPass,
  });
  return result;
};

const editUserServices = async (req) => {
  let encryptedPass = await encryptPass(req);
  const result = await Users.update(
    { email: req.body.email, password: encryptedPass },
    { where: { id: req.body.id } }
  );
  return result;
};

const deleteUserServices = async (req) => {
  const result = await Users.destroy({ where: { id: req.query.id } });
  return result;
};

module.exports = {
  getUsersServices,
  createUserServices,
  editUserServices,
  deleteUserServices,
};
