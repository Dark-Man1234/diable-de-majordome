const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";

client.login("NDY1OTkyOTM3MzIzMzY0MzYx.DiVlSw.kUzIz6w-btQtch93YuBYehlXwRU")

client.on("ready", () => {
    console.log("A votre service My Lord");
    client.user.setActivity("servir son maître");
});
