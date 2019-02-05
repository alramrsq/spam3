const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("542482333328998446")
setInterval(function() {
channel.send(`dsfggtttr`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
