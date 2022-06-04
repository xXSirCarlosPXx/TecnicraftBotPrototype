const Discord = require('discord.js');
const config = require('../../../src/config/config.json')
const client = new Discord.Client({ 
 restTimeOffset: 0,
 partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'], 
 intents: [32767]
});

servers('#servers', {
 servers: client.guilds.cache.size
})

client.login(config.token)