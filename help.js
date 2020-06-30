const Discord = require('discord.js')

exports.help = help

async function help (msg){
    if (msg.content== "~help") {
            let embede = new Discord.MessageEmbed()
            let embedStatut = new Discord.MessageEmbed()
            let url = msg.author.displayAvatarURL()
            let username = msg.author.username
            embede.setTitle("Voici toute les commandes !")
            embede.setThumbnail('https://i.imgur.com/p8cb2Md.png')
            embede.setColor("#FFA200")
            embede.setAuthor(username,url)
            msg.channel.send(embede)
            embedStatut.setTitle("**~Statut**")
            embedStatut.setDescription("Cette commande est résérvée aux <@&720628771010510969> \n Elle permet de changer le statut de <@719651340594184244>! \n ** ** \n Comment marche t-elle ? \n ~Statut [êtat*]_[Statut¤]\n êtat = **Seulement** \nWATCHING,PLAYING,STREAMING,LISTENING\nStatut = Votre Imagination\n Exemple : \n~Statut PLAYING Egg Simulator")
            embedStatut.setImage("https://i.imgur.com/m7UXsXg.jpg")
            embedStatut.setColor("#FFBD00")
            msg.channel.send(embedStatut)
        }
        {
        
        }
    }