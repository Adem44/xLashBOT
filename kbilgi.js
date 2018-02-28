const Discord = require('discord.js');
const dateFormat = require('dateformat');
const moment = require("moment");
require("moment-duration-format");

module.exports.run = (bot, msg, args) => {

  var user;
let member = msg.mentions.users.first();
    let author = msg.author; 
    if(member) {
         user = member;
    } else {
         user = author;
    }
member = msg.guild.member(user);
let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
   if (roles.length < 1) roles = ['Yazıık rolü yok.'];
const millisCreated = new Date().getTime() - user.createdAt.getTime();
const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
const millisJoined = new Date().getTime() - member.joinedAt.getTime();
const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
if(user.presence.status === "dnd"){
  var durum = "Rahatsız Etmeyin"
}
else if(user.presence.status === "online"){
  var durum = "Çevrimiçi"
}
else if(user.presence.status === "idle"){
  var durum = "Boşta"
}
  else {
  var durum = "Görünmez"
}
 const embed5 = new Discord.RichEmbed() 
     .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
     .setTimestamp() 
     .setThumbnail(`${user.displayAvatarURL}`)
     .addField("Users:", `${user.tag}`, true)
     .addField("Playing Game:", user.presence.game ? user.presence.game.name : 'The game is not playing!', true) 
     .addField("Status:", `${durum}` , true)
     .addField('After you have joined', `${userJoined} geçmiş vay be.`, true)
     .addField('Full Account', `${daysCreated} gün önce açılmış.`, true)
     .addField("Account Creation Date:", `${dateFormat(user.createdAt)}`)
     .addField('Roles:', `${roles.join(', ')}`, true)  
     .setFooter(`xLashBOT Bey`); 
     msg.channel.send({embed: embed5})

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı-bilgi','kbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'user-info',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'kullanıcıbilgi'
};
