const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Owner = **Fame Pes Etmez Asla#8626** `)
.setColor(0xdd0000));
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcı', 'yap' , 'y'],
  permLevel: 0
};

exports.help = {
  name: 'owner',
  description: ' yapımcıyı gösterir  ',
  usage: 'owner'
};
