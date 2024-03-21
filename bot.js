require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.login(process.env.DISCORD_TOKEN);

var nextFriday = new Date();
var unixTime = 0;

function getNextFriday() {
  var now = new Date();

  nextFriday.setDate(now.getDate() + (6 - 1 - now.getDay() + 7) % 7);
  nextFriday.setHours(21, 0, 0, 0);
  nextFriday = nextFriday;
  unixTime = Math.floor(nextFriday.getTime() / 1000);
}

client.on("message", msg => {
  if (msg.content === "!session") {
    getNextFriday();
    msg.reply(`Next session is:
    ${nextFriday}
    <t:${unixTime}:f> in your local time
    <t:${unixTime}:R>`);
  }
})