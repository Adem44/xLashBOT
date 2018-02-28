const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(message.guild.name, message.guild.iconURL)
   .setThumbnail(message.guild.iconURL)
   .addField('Name abbreviation:', message.guild.nameAcronym, true)
   .addField('İdentity:', message.guild.id, true)
   .addField('Area:', message.guild.region, true)
   .addField('Owner:', message.guild.owner, true)
   .addField('Verification level:', message.guild.verificationLevel, true)
   .addField('Member:', `${message.guild.members.filter( member => member.user.bot).size} bot / ${message.guild.memberCount} member`, true)
   .addField('Default role:', message.guild.defaultRole, true)
   .addField('Roles:', message.guild.roles.map(role => role.name).join(', '), true)
   .addField('Channel:', `${message.guild.channels.filter(chan => chan.type === 'voice').size} vowel / ${message.guild.channels.filter(chan => chan.type === 'text').size} text`, true)
   .addField('Number of channels:', message.guild.channels.size, true)
   .addField('Main Channel:', message.guild.defaultChannel, true)
   .addField('System Channel:', message.guild.systemChannel, true)
   .addField('AFK Channel:', message.guild.afkChannel, true)
   .addField('AFK timeout:', message.guild.afkTimeout, true)
   .addField('Creation date:', message.guild.createdAt, true)
   .setFooter('Server İnfo', message.guild.iconURL)
   .setTimestamp()
   message.channel.send({embed});
   message.react(':regional_indicator_s: ::regional_indicator_u: :regional_indicator_n: :regional_indicator_u: :regional_indicator_c: :regional_indicator_u:')
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['server-info', 'sunucubilgi'],
   permLevel: 0
 };

 exports.help = {
   name: 'server-info',
   description: 'Sunucu bilgisini söyler.',
   usage: 'sunucubilgi'
 };