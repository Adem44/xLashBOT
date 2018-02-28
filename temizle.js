exports.run = async (client, msg, args) => {
  const Discord=require("discord.js")
if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:No Permissions! **[YETKİN YOK]**")
}})
 const deleteCount = parseInt(args[0], 10); 
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Enter a value between 2 and 100! **[EN AZ 2, EN FAZLA 100 MESAJ SİLEBİLİRİM]**")
      }});
    msg.channel.bulkDelete(deleteCount).catch(function(err){console.log(err)})
      .then(msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      timestamp: new Date(),
      footer: {
        icon_url: "https://cdn.glitch.com/e84061f0-cc14-4a62-8c37-e4b9926f977a%2Fgiphy.gif?1507309527109",
        text: client.user.username+" | This message will clear itself in 10 seconds! **[BU MESAJ 10 SANİYE SONRA SİLİNECEK]**"
      },
     thumbnail: {
        url: `${msg.author.avatarURL}`
      },
      author: {
        name: `@${msg.author.username}#${msg.author.discriminator}`
      },
      fields: [
        {
          name: "The person who deleted **[SİLEN KİŞİ]**",
          value: msg.author.tag,
          inline: true
        },
        {
          name: "Number of deleted messages **[SİLİNEN MESAJ SAYISI]**",
          value: deleteCount,
          inline: true
        }
      ]
    }
  }).then(msg => msg.delete(10000)))
}

 exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear', 'temizle'],
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'afk olun',
  usage: 'temizle'
};