const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '엄') {
    message.reply('준식');
  }
});

client.on('message', (message) => {
    if(message.content === '엄준') {
      message.reply('식');
    }
  });

  client.on('message', (message) => {
    if(message.content === '엄준식') {
      message.reply('화이팅');
    }
  });

client.login(token);