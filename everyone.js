const Discord = require('discord.js')

exports.everyone = everyone

async function everyone (msg){
    if (msg.member.hasPermission(['MENTION_EVERYONE'])){
        let embedes = new Discord.MessageEmbed()
        embedes.setAuthor("he")}
    else
        msg.delete({ time: 2500 })
        let url = msg.author.displayAvatarURL()
        let embede = new Discord.MessageEmbed()
        let name = msg.author.username
        embede.setAuthor(`${name} a envoyé`)
        embede.setDescription(`${msg.author.lastMessage}`)
        embede.setColor("#FF8B00")
        embede.setThumbnail(url)              
        embede.setTimestamp()
        let listechannel = msg.guild.channels.cache
        for(channels of listechannel){
            if (channels[1].id == '720400605935435786'){
                bonchannel = channels[1]
            }
        }
        reponse = await bonchannel.send(embede)
        reponse = await bonchannel.send(` Le profil de la personne concérnée est ${msg.author.toString()}\n <@&719885091429416990> veuillez vous en occupé. :`)
    }
