require('dotenv').config();
const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const Messages = require('../database/models/messages');

const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);

let idClient = '';
let noInterationAdmin;

const getMessagesServices = async () => {
  const messages = await Messages.findAll();
  return messages;
};

const insertMessagesServices = async (message) => {
  // const result = await Messages.create({
  //   message,
  // });
  noInterationAdmin = false;
  console.log(noInterationAdmin);
  await bot.telegram.sendMessage(idClient, `${message}`);
};

const instanceTelegraf = async () => {
  noInterationAdmin = true;
  console.log(noInterationAdmin);

  bot.start(async (ctx) => {
    const from = ctx.update.message.from;
    idClient = from.id;
    const messageReceived = ctx.update.message.text;
    console.log(messageReceived);
    await ctx.reply(`Muito bem-vindo, ${from.first_name}!`);
    await ctx.reply('Por favor, digite seu nome completo!');
    setTimeout(async () => {
      await ctx.reply('Aguarde alguns minutos e logo será atendido!');
    }, "4000");
    // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    
  });

  // if (noInterationAdmin) {
  //   bot.on(message('text'), async (ctx) => {
  //     await ctx.reply('Aguarde alguns minutos e logo será atendido!');
  //     const messageReceived = ctx.update.message.text;
  //     console.log(messageReceived);
  //   });
  // }

  bot.launch();
};

module.exports = {
  getMessagesServices,
  insertMessagesServices,
  instanceTelegraf,
};
