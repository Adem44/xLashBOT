module.exports.run = async (client, msg, args) => {
if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:No Permissions! **[Yetkin Yok]**")
}})

            let susturulacak = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
            if(!susturulacak) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:I need a tag. It can not be like this. **[Etiketlemen Gerek Olmaz Böyle]**")
}})

            let role = msg.guild.roles.find(r => r.name === "Mute");

          if(!role || !susturulacak.roles.has(role.id)) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
		  description: (":no_entry_sign:This user is not already suspended **[Cezası Başarı İle Kaldırıldı!]**")
}});

          susturulacak.removeRole(role);
          msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: ("The penalty was successful.. **[Susturulmamuş]**")
}})
      }

 exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unmute', 'sustur-aç'],
  permLevel: 0
};

exports.help = {
  name: 'unmute',
  description: 'afk olun',
  usage: 'susturaç'
};