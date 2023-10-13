require('dotenv').config();
const { Telegraf } = require('telegraf');
// const { message } = require('telegraf/filters')
const Messages = require('../database/models/messages');

const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);

let context = [];

const getMessagesServices = async () => {
  const messages = await Messages.findAll();
  return messages;
};

const insertMessagesServices = async (message) => {
  // const result = await Messages.create({
  //   name,
  //   message,
  // });
  bot.on('text', (ctx, next) => {
    ctx.reply('entrou');
    next();
  })
};

const instanceTelegraf = async () => {
  bot.start((ctx) => {
    const from = ctx.update.message.from;
    console.log(from);
    ctx.reply(`Muito bem-vindo, ${from.first_name}!`);
    context.push(ctx);
    console.log(context);
  });

  bot.startPolling();
}

module.exports = {
  getMessagesServices,
  insertMessagesServices,
  instanceTelegraf,
};
