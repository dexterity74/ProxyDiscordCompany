//integrated libraries
const Discord = require('discord.js');
const fs = require('fs');
//const express = require('express');
//const morgan = require('morgan');
//const mysql = require('mysql');
//const bodyParser = require('body-parser');
//local exports
const channelBlacklist = require('./functions/channel_blacklist.js');
const authorizedUsers = require('./functions/authorized_users.js');
const commandHandler = require('./functions/command_handler.js');
// axios is local to commands now
//const axios = require('axios');
//const app = express();
const client = new Discord.Client();
/////////////////////////////////////////////////////////////////////////////
/*

//Below is the progress to incorporate Database management of sub users

app.use(morgan('combined'));

app.use(bodyParser.json());

function getConnection() {
    return  mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'Bulletmoon',
            database: 'bullet_users',
            multipleStatements: true
        })
}

app.get('/users', (req, res) => {
    const mysqlConnection = getConnection();

    const queryString = "SELECT * FROM users";
    mysqlConnection.query(queryString, (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        }
        else{
            console.log("Failed to query for users: " + err);
            res.sendStatus(500);
            return;
        }
    })
})

mysqlConnection.connect((err) => {
    if(!err) {
        console.log('Connection to mysql succeeded');
    }
    else{
        console.log(err, 'Connection to mysql failed');
    }
})


app.get('/users', (req, res) => {
    console.log("sending factual quote to localhost");
    
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Negronjustin74$',
        database: 'bullet_users'
    })

    connection.query('SELECT * FROM users', (err, rows, fields) => {
        console.log('is this thing on?');
        res.json(rows);
    })

    //res.end();
})
*/

//EVERYTHING BELOW IS FLAWLESS
client.commands = new Discord.Collection();

const botCommandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of botCommandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const PREFIX = '!';

client.once('ready', () => {
    console.log('\n === This hoe is working === \n');
});

client.on('guildMemberAdd', member => {
    
    const Embed = new Discord.MessageEmbed()
        .setColor(0x14e70d)
        .setAuthor(member.user.tag + ' [' + member.user.id + ']', member.user.displayAvatarURL()) 
        .setDescription(member)
        .setTimestamp()
        .setFooter('User has joined', 'https://cdn.discordapp.com/attachments/740267016547467267/742318464701693992/7ae2b660f6e3bb5ba517743346af86b3.png');

    client.channels.cache.get('744075075690692639').send(Embed);

    /*
    //Below is the progress to incorporate Database management of sub users
    const queryString = "INSERT INTO users (discord_id, discord_tag, proxy_username) VALUES (?, ?, ?)"
    app.post('/users', (req, res) => {
        getConnection().query(queryString, [member.user.id, member.user.tag, Math.random().toString(36).substring(2, 15)], (err, results, fields) => {
            if(!err) {
                console.log('Inserted a new user: ', results);
                res.end();
            }
            else{
                console.log("Failed to insert new user: " + err);
                res.sendStatus(500);
                return;
            }
        })
    })
    */
    
    //client.channels.cache.get('omitted channel id').send('^^^^ Left the server so remove sub user');
    return;
});

client.on('guildMemberRemove', member => {
    const Embed = new Discord.MessageEmbed()
        .setColor(0xf5080c)
        .setAuthor(member.user.tag + ' [' + member.user.id + ']', member.user.displayAvatarURL()) 
        .setDescription(member) 
        .setTimestamp()
        .setFooter('User has left', 'https://cdn.discordapp.com/attachments/740267016547467267/742318464701693992/7ae2b660f6e3bb5ba517743346af86b3.png');

    client.channels.cache.get('744075075690692639').send(Embed);

    /*
    //Below is the progress to incorporate Database management of sub users
    const queryString = "DELETE FROM users (discord_id, discord_tag, proxy_username) VALUES (?, ?, ?)"
    app.delete('/users', (req, res) => {
        getConnection().query(queryString, [member.user.id, member.user.tag, Math.random().toString(36).substring(2, 15)], (err, results, fields) => {
            if(!err) {
                console.log('Deleted user: ', results);
                res.end();
            }
            else{
                console.log("Failed to delete user: " + err);
                res.sendStatus(500);
                return;
            }
        })
    })
    */

    //client.channels.cache.get('omitted channel id').send('^^^^ Left the server so remove sub user');
    return;
});

client.on('message', async message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) {
        return;
    }
    //channels that the bot is not allowed to speak in
    channelBlacklist(message);

    //AUTHORIZED USERS
    const userInfo = authorizedUsers(message);

    const username = userInfo[0];
    const usernameNoShow = userInfo[1];
    const password = userInfo[2];
    const passwordNoShow = userInfo[3];

    const args = message.content.slice(PREFIX.length).split(' ');
    const command = args.shift().toLowerCase();

    commandHandler(client, message, command, args, username, usernameNoShow, password, passwordNoShow);
    
    return;
});

//always has to be last line of file
client.login('omitted confidential token');