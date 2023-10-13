const router = require('express').Router();
const status = require('http-status');
const { bodyMessagesValidation } = require('../middlewares/validations');
// const express = require('express');

const {
  getMessagesController,
  insertMessagesController,
} = require('../controllers/messagesController');

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

// MENSAGENS
router.get('/messages', getMessagesController);
router.post('/messages', bodyMessagesValidation, insertMessagesController);

// INSTANCIAR TELEGRAF
instanceTelegraf();

module.exports = router;
