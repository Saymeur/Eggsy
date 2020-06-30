const Discord = require('discord.js');

const client = new Discord.Client();

client.login("NzE5NjUxMzQwNTk0MTg0MjQ0.Xt6jdA.pCKFI2J6PQEXgaMjodYcJnLZPK4")

exports.ErrorStatut = ErreurStatut



async function ErreurStatut (msg){
    if (msg.content.startsWith("~Statut")) {
      if (msg.content.includes("PLAYING") || msg.content.includes("WATCHING") || msg.content.includes("LISTENING")) {
    } else {
      var embed = new Discord.MessageEmbed()
        .setTitle("Oh, on dirait bien que tu t'es planté")
        .setDescription(`Pour plus d'informations sur la commande, tapes "~help Statut"`)
        msg.channel.send(embed)
    }
  }
}
