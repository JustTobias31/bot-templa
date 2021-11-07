const Discord = require("discord.js")
const Commands = require("./Commands.js")
const Intends = new Discord.Intents(32767);
class Client extends Discord.Client {
}

module.exports = Client;