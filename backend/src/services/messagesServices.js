require('dotenv').config();
const { Op } = require('sequelize');
const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const Messages = require('../database/models/messages');

const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);

let idClient;

const getMessagesServices = async () => {
  const messages = await Messages.findAll({
    where: {
      client: {
        [Op.or]: [idClient, `bot-${idClient}`],
      },
    },
  });

  return messages;
};

const insertMessagesServices = async (message) => {
  await bot.telegram.sendMessage(idClient, `${message}`);
  await Messages.create({
    client: `bot-${idClient}`,
    message,
  });
};

const saveLogMesseges = async (idClient, messageReceived) => {
  await Messages.create({
    client: idClient,
    message: messageReceived,
  });
};

const instanceTelegraf = async () => {
  bot.start(async (ctx) => {
    const from = ctx.update.message.from;
    idClient = from.id;

    await ctx.reply(`Muito bem-vindo, ${from.first_name}!`);
    saveLogMesseges(`bot-${idClient}`, `Muito bem-vindo, ${from.first_name}!`);

    await ctx.reply(`Selecione dentre as opções:\n
    1 - Vizualizar ofertas\n2 - Atendimento no suporte.`);
    saveLogMesseges(
      `bot-${idClient}`,
      `Selecione dentre as opções:\n
    1 - Vizualizar ofertas\n2 - Atendimento no suporte.`
    );
  });

  bot.on(message('text'), async (ctx) => {
    const messageReceived = ctx.update.message.text;

    if (messageReceived === '1') {
      ctx.reply(`Aqui você encontra nosso catálogo:\n
      https://br.pinterest.com/pin/436708495109942055/`);
      saveLogMesseges(idClient, messageReceived);
      saveLogMesseges(
        `bot-${idClient}`,
        `Aqui você encontra nosso catálogo:\n
      https://br.pinterest.com/pin/436708495109942055/`
      );
    } else if (messageReceived === '2') {
      ctx.reply('Aguarde alguns minutos, logo o suporte te responderá!');
      saveLogMesseges(idClient, messageReceived);
      saveLogMesseges(
        `bot-${idClient}`,
        'Aguarde alguns minutos, logo o suporte te responderá!'
      );
    } else {
      saveLogMesseges(idClient, messageReceived);
    }
  });

  bot.launch();
};

module.exports = {
  getMessagesServices,
  insertMessagesServices,
  instanceTelegraf,
};
