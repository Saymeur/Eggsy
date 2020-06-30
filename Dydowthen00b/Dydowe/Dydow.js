const Discord = require('discord.js');

const client = new Discord.Client();

client.login("NzE5NjUxMzQwNTk0MTg0MjQ0.Xt6jdA.pCKFI2J6PQEXgaMjodYcJnLZPK4")

exports.Hug = Hug




async function Hug (msg){
    if (msg.content.startsWith("~hug")) {
        let user = await client.users.fetch("408964808319303700")
        msg.channel.send(user.presence.status)       
        
        }}

