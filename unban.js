const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning :warning:  you can not use unban in private messages. **[Uyarı :warning: özel mesajlarda BAN özelliğini kullanamazsınız]**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I can not find the mod-log channel. **[mod-log Kanalını Bulamıyorum]**');
  if (reason.length < 1) return message.reply('You should write the reason for the ban. **[Unban nedenini yazmanız gerekir.]**');
if (!user) return message.reply('You should write the ID number of the person to be removed. **[Ban Kaldırılacak kişinin ID numarasını yazmalısınız]**').catch(console.error);
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action **[EYLEM]:', 'UNBAN')
    .addField('Users **[KULLANICI]**:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Authorized **[YETKİLİ]**:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason **[SEBEP]**', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unban', 'banaç'],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};
