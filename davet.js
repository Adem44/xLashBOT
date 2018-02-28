 exports.run = (client, msg, args) => {
   msg.author.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       author: {
         name: msg.author.username,
         icon_url: msg.author.avatarURL
       },
     fields: [
         {
		 name: "invite **[Davet]**",
           value: "**[Tıkla]** => [Click To Add Me](https://discordapp.com/oauth2/authorize?client_id=398445761895071744&scope=bot&permissions=8) - [Click Here To Come My Server](https://discord.gg/ZNTrvk6)"
         }
       ],
       timestamp: new Date(),
       footer: {
         icon_url: client.user.avatarURL,
         text: "© Adem Y. = xLashBOT"
       }
     }
   })
 msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: ("DM Bak => Look DM :rocket:")
 }}).then(msg.delete()).then(msg => msg.delete(10000));
 }
 
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Yumruk Atar.',
  usage: 'davet'
};