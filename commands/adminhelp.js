module.exports = {
    name: 'adminhelp',
    description: 'this command is to output a command help window only for admins',
    execute(message) {
        const Discord = require('discord.js');

        //if NOT admin
        if(message.author.id != 'omitted' || message.author.id == 'omitted' || message.author.id == 'omitted') {
            console.log(message.author, '\n === WARNING USER TRYING TO USE ADMINHELP COMMAND ===\n');
            return;
        }

        //commands have bullet themed names, the company name is "Bullet Proxies"
        
        //message.author.send('You are an admin');
        const Embed = new Discord.MessageEmbed()
            .setColor(0xb4975a)
            .setTitle('Admin Command Help')
            .setDescription(' — Prefix is `!`')
            .addFields({
                name: 'Admin Commands', 
                value: '`!accountinfo` —> View reseller account info\n\
                        `!adminhelp` —> List of commands to manage sub-users'}
            )
            .addFields({
                name: 'Common Sub-user Command Help', 
                value: '`!findun {Discord ID}` —> finds a sub-users proxy username\n\
                        `!csu {username}` —> create a sub-user\n\
                        `!addsub {username} {data bought}` —> add to a sub-users balance\n\
                        `!vssu {username}` —> view a single sub-user\n\
                        `!vsuth {username}` —> view a sub-users transaction history\n\
                        `!vallu` —> view ALL sub-users (warning long list)'}
            )
            .addFields({
                name: 'UNCOMMON Sub-user Command Help —CAREFUL—', 
                value: '`!rsupak {username}` —> reset sub-users proxy auth key\n\
                        `!sfsub {username} {data to reduct}` —> subract from a sub-users balance'}
            )
            .addFields({
                name: 'User Command Help', 
                value: '`!mag` —> checks the remaining data\n\
                        `!reload {country} {ip type} {proxies needed}` —> generate proxy list\n\
                        `!countries` —> send a text file of all countries\n\
                        `!help` —> display commands'}
            )
            .setTimestamp()
            .setFooter('Bullet Proxies LLC', 'https://cdn.discordapp.com/attachments/740267016547467267/742318464701693992/7ae2b660f6e3bb5ba517743346af86b3.png')

        message.channel.send(Embed);
    }
}