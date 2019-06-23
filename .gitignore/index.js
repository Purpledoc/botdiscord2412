const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})
bot.on('message' , message => {
  if (message.content === '!menu') { 
    message.delete()
    var embed = new Discord.RichEmbed()
  .setTitle("info serv")
  .setAuthor("Purple Haze", "https://media.giphy.com/media/S72cxik7V9jSmPIloE/giphy.gif")
  .setColor(0x00AE86)
  .setDescription("commande \r ")
  message.channel.send({embed});
  }
})
bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
  })

bot.on('message' , message => {
  if (message.content === '!info') { 
    message.delete()
    var embed = new Discord.RichEmbed()
  .setTitle("info serv")
  .setAuthor("Purple Haze", "https://media.giphy.com/media/S72cxik7V9jSmPIloE/giphy.gif")
  .setColor(0x00AE86)
  .setDescription("ce serveur et la pour rigoler mais attention il y a des régles.")
  .setImage("https://media.giphy.com/media/S72cxik7V9jSmPIloE/giphy.gif")
  .setThumbnail("https://media.giphy.com/media/S72cxik7V9jSmPIloE/giphy.gif")
  message.channel.send({embed});
  }

  bot.on('message', message => {
    if (message.content === '!avatar') {
      message.delete()
      member = message.mentions.users.first();
    }
  })
  
})
bot.login('NTkyMDAwNjAxMjUyOTU0MTMz.XQ49tw.H2hOAad8WTNYDQ6ncCrpRD5vwXU')
