const Discord = require("discord.js")
const Command = require("../Structures/Commands.js")

module.exports = new Command ({
name: "ping",
description: "Bot's ping which it'll show the speed of the bot.",

async run(message, args, client) {
  let embed = new Discord.MessageEmbed()
            .setTitle(`Bot's ping is ${client.ws.ping} ms`)
            .setColor("RANDOM");
          message.channel.send({ embeds: [embed] });
}
});