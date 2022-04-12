module.exports = {
    name: 'help',
    description: 'this command outputs a command help menu to users',
    execute(message) {
        const Discord = require('discord.js');

        const Embed = new Discord.MessageEmbed()
            .setAuthor('Bullet Proxy Bot Help')
            .setColor(0xb4975a)
            .setDescription(' — Prefix is `!`')
            .addFields({
                name: 'Command Help', 
                value: '`!mag` —> checks the remaining data\n\
                        `!reload {country} {ip type} {proxies needed}` —> generate proxy list\n\
                        `!countries` —> send a text file of all countries\n\
                        `!help` —> display commands'}
            )
            .setTimestamp()
            .setFooter('Bullet Proxies LLC', 'https://cdn.discordapp.com/attachments/740267016547467267/742318464701693992/7ae2b660f6e3bb5ba517743346af86b3.png')

        message.author.send(Embed);
    }
}