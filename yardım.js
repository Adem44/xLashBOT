const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("** Help Commands **", `\n!advice **!tavsiye** \n!ping **!ping** \n!avatar **!avatar** \n!ban **!ban** \n!infarmation **!botbilgi** \n!servers **!sunucular** \n!invite **!davet** \n!user-info **!kullanıcı-bilgi** \n!server-info **!sunucu-bilgi** \n!mute **!sustur** \n!unmute **!sustur-aç** \n!owner **!yapımcı** \n!clear **!temizle** \n!unban **!ban-aç** \n!warn  **!uyar** \n!help **!yardım**`)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'yardım'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};