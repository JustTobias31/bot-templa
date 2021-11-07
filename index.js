const Discord = require("discord.js")
const intends = new Discord.Intents(32767);
const Client = require("./src/Structures/Client.js");
process.env['TOKEN']
const Command = require("./src/Structures/Commands.js")
const config = require("./src/Data/config.json");
const client = new Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const fs = require("fs")

fs.readdirSync("./src/Commands")
.filter(file => file.endsWith(".js"))
.forEach(file => {
  /**
   * @type {Command}
   */
client.commands = new Discord.Collection();

const fileofCommands = fs.readdirSync('./src/Commands/').filter(file => file.endsWith('.js'));

for(const file of fileofCommands){
  const command = require(`./src/Commands/${file}`);

  client.commands.set(command.name, command);
}

});
client.on("ready", () =>
  client.user.setPresence({
    //Bot status:
    Setactivity: { name: "This is a beta test!", type: "PLAYING" },
    status: "online"
  }))
  console.log("The bot is successfully started!")
client.on("messageCreate", message => {

  if (!message.content.startsWith(config.prefix)) return;

const args = message.content.substring(config.prefix.length).split(/ +/)

const command = client.commands.find(cmd => cmd.name == args[0]);


if (!command) return message.reply(`${args[0]} ur text`)

command.run(message, args, client);

})
client.login(config.token);
