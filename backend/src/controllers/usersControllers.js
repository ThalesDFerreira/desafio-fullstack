const status = require('http-status');
const {
  getUsersServices,
  createUserServices,
  editUserServices,
  deleteUserController,
} = require('../services/usersServices');

const getUsersController = async (req, res) => {
  try {
    const users = await getUsersServices();
    return res.status(status.OK).json(users);
  } catch (error) {
    console.log(error);
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

const createUserController = async (req, res) => {
  try {
    createUserServices(req);
    return res.status(status.CREATED).json({
      message: `Usuario ${result.usuario} cadastrado com sucesso!`,
    });
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

const editUserController = async (req, res) => {
  try {
    editUserServices(req);
    return res.status(status.ACCEPTED).json({
      message: `Usuario (${req.body.id}) alterado com sucesso!`,
    });
  } catch (error) {
    console.log(error);
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

const deleteUserController = async (req, res) => {
  try {
    deleteUserController(req);
    return res.status(status.OK).json({
      message: 'Usuário deletado com sucesso!',
    });
  } catch (error) {
    console.log(error);
    return res.status(status.BAD_REQUEST).json({ erro: error.message });
  }
};

module.exports = {
  getUsersController,
  createUserController,
  editUserController,
  deleteUserController,
};
