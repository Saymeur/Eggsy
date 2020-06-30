const Discord = require('discord.js');
const client = new Discord.Client();
const Everyone = require('./everyone.js')
const Here = require('./here.js')
const Statut = require('./Statut.js')
const StatutPlaying = require('./StatutPlaying.js')
const StatutListening = require('./StatutListening.js')
const Help = require('./help')
const ErreurStatut = require(`./ErreurStatut`);
const Hug = require(`./Dydowthen00b/Dydowe/Dydow`)
const APItoken = require(`./token.js`)

client.login(APItoken.token)

client.on('message', msg =>{
    if (msg.content.includes("@everyone"))      { Everyone.everyone(msg)  }
    if (msg.content.includes("@here"))      { Here.here(msg)  }
    if (msg.content.startsWith("~Statut"))      { Statut.statut(msg) }
    if (msg.content.startsWith("~Statut"))      { ErreurStatut.ErrorStatut(msg) }
    if (msg.content.startsWith("~Statut"))      { StatutPlaying.StatutPlaying(msg) }
    if (msg.content.startsWith("~Statut"))      { StatutListening.StatutListening(msg) }
    if (msg.content.startsWith("~help"))      { Help.help(msg)  }
    if (msg.content.startsWith("~hug"))      {Hug.Hug(msg)}
})

client.once('ready', () => {
    console.log('Ready!');
});




