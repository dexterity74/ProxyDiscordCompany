module.exports = {
    name: 'sfsub',
    description: 'this command is for admins to subtract data from sub users',
    execute(message, args) {
        const axios = require('axios');

        if(message.author.id != 'omitted' || message.author.id == 'omitted' || message.author.id == 'omitted') {
            console.log(message.author, '\n === WARNING USER TRYING TO USE SFSUB COMMAND ===\n');
            return;
        }

        if(args.length < 2) {
            message.channel.send('**=== Not enough arguments: Format is** `!addsub {sub-users username} {data purchased}` **===**');
            return;
        }
        if(args.length > 2) {
            message.channel.send('**=== Too many arguments: Format is** `!addsub {sub-users username} {data purchased}` **===**');
            return;
        }

        const data = '{"username": "' + args[0] + '"}';

        const takeData = {
            method: 'post',
            url: 'https://reseller.packetstream.io/reseller/sub_users/take_balance',
            headers: { 
                'Authorization': 'Bearer API-ACCESS-TOKEN'
            },
            data : data
        };

        axios(takeData)
            .then(function (response) {
                message.channel.send(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
        });
    }
}