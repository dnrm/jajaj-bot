require('dotenv').config();
const Discord = require('discord.js')
const Client = new Discord.Client();

let onOrOff = false;
let adminMode = false;

Client.on('message', (message) => {
    if (adminMode == false) {
        if (message.author.username != Client.user.username) {
            if (message.content == '--on') {
                onOrOff = true;
                message.channel.send('Turned on :thumbsup:');
            } else if (message.content == '--off') {
                onOrOff = false;
                message.channel.send('Turned off :thumbsup:');
            }
        }
    }
    if (message.author.username == 'dnrm') {
        if (message.content == '--locked') {
            adminMode = true;
            message.channel.send('Locked configuration :thumbsup:');
        } else if (message.content == '--unlocked') {
            adminMode = false;
            message.channel.send('Unlocked configuration :thumbsup:');
        }
    }
})

Client.on('message', (message) => {
    if (onOrOff == true) {
        if (message.author.username != Client.user.username) {
            message.channel.send('AJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJJAAJJAJJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJ')
        }
    }
})

Client.on('ready', () => {
    console.log(`Logged in as ${Client.user.tag}`);
})

Client.login(process.env.JAJAJ_TOKEN);