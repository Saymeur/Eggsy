const Discord = require('discord.js');

const client = new Discord.Client();

client.login("NzE5NjUxMzQwNTk0MTg0MjQ0.Xt6jdA.pCKFI2J6PQEXgaMjodYcJnLZPK4")

exports.StatutListening = StatutListening



async function StatutListening (message){
    if (message.content.startsWith("~Statut")) {
        if (message.content.includes("LISTENING")){
            console.log('hello world')
            const str = (`${message.author.lastMessage}`);
            const Type = (str.substr(8, 10));
            const Custom = (str.substr(18));
            let embede = new Discord.MessageEmbed()
            embede.setTitle("Oh, on dirait que quelqu'un a changé le statut de Eggsy")
            embede.setDescription(`${message.author.toString()} a modifié le statut du bot, son statut est maintenant ${Type} ${Custom} `)
            embede.setImage(`${message.author.displayAvatarURL()}`)
            console.log(Type)
            console.log(Custom)
            if (message.author.id == client.user.id) {
                message.delete();
            }        
            message.channel.send({
                'embed': new Discord.MessageEmbed()
                .setTitle("Chargement du statut")
                .setColor('#000000')
            }).then(function(message2) {
                setTimeout(function() {
                    message2.edit({
                        'embed': new Discord.MessageEmbed()
                        .setTitle('[▓ ] 𝟏%')
                        .setColor("#FF0000")
                    });
                }, 1000);
                setTimeout(function() {
                    message2.edit({
                        'embed': new Discord.MessageEmbed()
                        .setTitle("[▓▓▓▓] 𝟐𝟓%")
                        .setColor("#FF6C00")
                    });
                }, 2000);
                setTimeout(function() {
                    message2.edit({
                        'embed': new Discord.MessageEmbed()
                        .setTitle("[▓▓▓▓▓▓▓] 𝟓𝟎%")
                        .setColor("#FFD500")
                    });
                }, 3000);
                setTimeout(function() {
                    message2.edit({
                        'embed': new Discord.MessageEmbed()
                        .setTitle("[▓▓▓▓▓▓▓▓▓▓▓] 𝟕𝟓%")
                        .setColor("#C1FF00")
                    });
                }, 4000);
                setTimeout(function() {
                    message2.edit({
                        'embed': new Discord.MessageEmbed()
                        .setTitle("[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 𝟏𝟎𝟎%")
                        .setColor("#51FF00")
                    });
                }, 5000);
                setTimeout(function() {
                    message2.edit({
                        'embed': new Discord.MessageEmbed()
                        .setTitle('Complete.')
                        .setColor("#000000")
                    });
                }, 6000);
                setTimeout(function() {
                    message2.delete();
                }, 10000);
            })

            await delay(8000)
            client.user.setActivity(Custom, {type:"LISTENING"})
            let listechannel = message.guild.channels.cache
            for(channels of listechannel){
                if (channels[1].id == '719642448166518821'){
                    bonchannel = channels[1]
                }
            }
            reponse = await bonchannel.send(embede)
            async function delay(ms) {return new Promise((resolve) => { setTimeout(resolve, ms) })};}}}
            