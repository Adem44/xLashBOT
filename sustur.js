module.exports.run = async (client, msg, args) => {
if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:No Permissions! **[Yetkin YOK!]**")
}})

          let susturulacak = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
          if(!susturulacak) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:I need a tag. It can not be like this. **[Etiketlemen Gerek Olmaz Böyle]**")
}})

          if(susturulacak.id === msg.author.id) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:You can not shut yourself! **[Kendini Susturamazsın]**")
}})
          if(susturulacak.highestRole.position >= msg.member.highestRole.position) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:You can not silence the higher you play! **[Yetkilileri Banlıyamam]**")
}})
          let role = msg.guild.roles.find(r => r.name === "Cezalı");
          if(!role) {
          try {
              role = await msg.guild.createRole({
                    name: "Mute",
                    color: "#0b0a0a",
                    permission:[]
            });

            msg.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          } catch(e) {
              console.log(e.stack);
          }

        }

        if(susturulacak.roles.has(role.id)) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Already silenced! **[Zaten susturdum!]**")
}});

        await susturulacak.addRole(role);
        msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: ("M U T E !")
}})
}

 exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mute', 'mute-aç'],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'afk olun',
  usage: 'sustur'
};