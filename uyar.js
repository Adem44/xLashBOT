const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Alert :warning: you can not use WARN in private messages. **[Uyarı :warning: özel mesajlarda Uyar özelliğini kullanamazsınız]**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I can not find the mod-log channel. **[mod-log Kanalını Bulamıyorumm]**');
  if (reason.length < 1) return message.reply('You must write the reason for the warning. **[Uyarı nedenini yazmanız gerekir.]**');
  if (message.mentions.users.size < 1) return message.reply('You should write who to warn. **[Kimi uyarılacağını yazmalısın.]**').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('**[EYLEM]**Action:', 'WARNING!')
  .addField('**[KULLANICI]**User:', `${user.username}#${user.discriminator}`)
  .addField('**[YETKİLİ]**Authorized:', `${message.author.username}#${message.author.discriminator}`)
  .addField('**[SEBEP]**Reason', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['warn', 'uyar'],                 
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'warn [kullanıcı] [sebep]'
};
