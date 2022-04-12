module.exports = {
    name: 'vsuth',
    description: 'this command is for admins to view a sub users transaction history',
    execute(message, args) {
        const axios = require('axios');

        if(message.author.id != 'omitted' || message.author.id == 'omitted' || message.author.id == 'omitted') {
            console.log(message.author, '\n === WARNING USER TRYING TO USE VSUTH COMMAND ===\n');
            return;
        }

        if(args.length < 1) {
            message.channel.send('**=== Not enough arguments: Format is** `!vsuth {sub-users username}` **===**');
            return;
        }
        if(args.length > 1) {
            message.channel.send('**=== Too many arguments: Format is** `!vsuth {sub-users username}` **===**');
            return;
        }

        const data = '{"username": "' + args[0] + '"}';

        const viewUserHistory = {
            method: 'post',
            url: 'https://reseller.packetstream.io/reseller/sub_users/view_txs',
            headers: { 
                'Authorization': 'Bearer API-ACCESS-TOKEN'
            },
            data : data
        };

        axios(viewUserHistory)
            .then(function (response) {
                message.channel.send(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
        });
    }
}