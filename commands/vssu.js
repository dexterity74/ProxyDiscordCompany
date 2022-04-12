module.exports = {
    name: 'vssu',
    description: 'this command is for admins to view a single sub user',
    execute(message, args) {
        const axios = require('axios');

        if(message.author.id != 'omitted' || message.author.id == 'omitted' || message.author.id == 'omitted') {
            console.log(message.author, '\n === WARNING USER TRYING TO USE VSSU COMMAND ===\n');
            return;
        }

        if(args.length < 1) {
            message.channel.send('**=== Not enough arguments: Format is** `!vssu {sub-users username}` **===**');
            return;
        }
        if(args.length > 1) {
            message.channel.send('**=== Too many arguments: Format is** `!vssu {sub-users username}` **===**');
            return;
        }

        const data = '{"username": "' + args[0] + '"}';

        const viewSubUser = {
            method: 'post',
            url: 'https://reseller.packetstream.io/reseller/sub_users/view_single',
            headers: { 
                'Authorization': 'Bearer API-ACCESS-TOKEN'
            },
            data : data
        };

        axios(viewSubUser)
            .then(function (response) {
                message.channel.send(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
        });
    }
}