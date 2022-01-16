require('dotenv').config()

const Discord = require("discord.js")
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_BANS,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
    if (msg.author.bot) return;
    else if (msg.content.toLowerCase().includes('fuck')){
        msg.channel.send('This is a Christian server.');
        console.log(msg)
        msg.delete();
  }
})

client.login(process.env.TOKEN)
