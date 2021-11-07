const Discord = require("discord.js")
const Command = require("../Structures/Commands.js")
module.exports = new Command ({
name: "help",
description: "Bot will give all commands that bot have.",

async run(message, args, client) {
  const row = new Discord.MessageActionRow()
  .addComponents(
				new Discord.MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('W.I.P')
					.addOptions([
						{
							label: 'Developing Commands',
							description: "Do not click! It won't work",
							value: 'first_option',
						},
					]),
			);
			let embed = new Discord.MessageEmbed()
      .setTitle("your text")
      .setDescription("your text")
       .addFields(
		{ name: 'your text', value: "your text", inline: true},
		{ name: 'your text', value: 'your text', inline: true},
		{ name: 'your text', value: 'your text', inline: true },
		{ name: 'your text', value: 'your text', inline: true },
	)
    .setColor("#0000ff")
    .setFooter(`your text ${client.ws.ping} ms`)
    .setTimestamp();
  message.channel.send({embeds: [embed],components: [row]})
}
});