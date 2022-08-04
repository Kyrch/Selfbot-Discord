const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false
});

client.on('ready', () => {
    console.log('selfbot ready')
    channel = client.channels.cache.find(channel => channel.id == '997296064325505134')
})

const firstInterval = setInterval(() => {
    channel.send("$p")
    clearInterval(firstInterval)
}, 10000)

setInterval(() => {
    channel.send("$p")
}, 2 * 60 * 60 * 1000 + 15 * 60 * 1000);

client.login(require('./token.json')["token"]);