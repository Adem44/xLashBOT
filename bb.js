const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const client = new Discord.Client();

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(message.guild.name, message.guild.iconURL)
   .setThumbnail("https://cdn.discordapp.com/avatars/396608440119853058/c45ef69a8d92a00c08aee70e503372e7.png?size=2048")
   .addField('Framework:', '**discord.js**')
   .addField('Version:', '**1.9.3v sürümünde çalışıyorum!**')
   .addField('Servers:', `**${bot.guilds.size} guilds** | **${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users** | **${bot.channels.size} channel**`)
   .addField('Owner:', `<@335388348980133889> 'dir `)
   .addField('Discord JS Version:', 'v11.3.0')
   .addField('Ping:', `${bot.ping}`)
   .setTimestamp()
   message.channel.send({embed});
   message.react(`✅`);
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['botbilgi', 'botb', 'bbilgi', 'bb'],
   permLevel: 2
 };

 exports.help = {
   name: 'infarmation',
   description: 'Bot hakkında bilgi.',
   usage: 'infarmation'
 };
 