module.exports = {
    name: 'rsupak',
    description: 'this command is used by admins to reset a sub users proxy auth key',
    execute(message, args) {
        const axios = require('axios');

        if(message.author.id != 'omitted' || message.author.id == 'omitted' || message.author.id == 'omitted') {
            console.log(message.author, '\n === WARNING USER TRYING TO USE RSUPAK COMMAND ===\n');
            return;
        }

        if(args.length < 1) {
            message.channel.send('**=== Not enough arguments: Format is** `!rsupak {sub-users username}` **===**');
            return;
        }
        if(args.length > 1) {
            message.channel.send('**=== Too many arguments: Format is** `!rsupak {sub-users username}` **===**');
            return;
        }

        const data = '{"username": "' + args[0] + '"}';

        const resetProxyAuth = {
            method: 'post',
            url: 'https://reseller.packetstream.io/reseller/sub_users/reset_auth_key',
            headers: { 
                'Authorization': 'Bearer API-ACCESS-TOKEN'
            },
            data : data
        };

        axios(resetProxyAuth)
            .then(function (response) {
                message.channel.send(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
        });
    }
}