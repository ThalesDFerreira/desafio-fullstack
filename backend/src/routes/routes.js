const router = require('express').Router();
const status = require('http-status');
const {
  bodyMessagesValidation,
  bodyUsersValidation,
  bodyEditUsersValidation,
  bodyLoginValidation,
} = require('../middlewares/validations');

const {
  getMessagesController,
  insertMessagesController,
} = require('../controllers/messagesControllers');

const {
  getUsersController,
  createUserController,
  editUserController,
  deleteUserController,
} = require('../controllers/usersControllers');

const { loginController } = require('../controllers/loginController');

const { instanceTelegraf } = require('../services/messagesServices');

router.get('/', (req, res) => {
  try {
    return res.status(status.OK).json({
      message: 'Server ready, waiting action !!!',
    });
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({
      message: error,
    });
  }
});

// LOGIN
router.post('/login', bodyLoginValidation, loginController);

// USUARIOS
router.get('/users', getUsersController);
router.post('/users', bodyUsersValidation, createUserController);
router.put('/users', bodyEditUsersValidation, editUserController);
router.delete('/users', deleteUserController);

// MENSAGENS
router.get('/messages', getMessagesController);
router.post('/messages', bodyMessagesValidation, insertMessagesController);

// INSTANCIAR TELEGRAF
instanceTelegraf();

module.exports = router;
