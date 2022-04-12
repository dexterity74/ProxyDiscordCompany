module.exports = {
    name: 'csu',
    description: 'this command allows admins to create a sub user',
    execute(message, args) {
        const axios = require('axios');

         //if NOT admin
         if(message.author.id != 'omitted' || message.author.id == 'omitted' || message.author.id == 'omitted') {
            console.log(message.author, '\n === WARNING USER TRYING TO USE CSU COMMAND ===\n');
            return;
        }
        
        if(args.length < 1) {
            message.channel.send('**=== Not enough arguments: Format is** `!csu {sub-users username}` **===**');
            return;
        }
        if(args.length > 1) {
            message.channel.send('**=== Too many arguments: Format is** `!csu {sub-users username}` **===**');
            return;
        }
        
        const data = '{"username": "' + args[0] + '"}';

        const createUser = {
            method: 'post',
            url: 'https://reseller.packetstream.io/reseller/sub_users/create',
            headers: { 
                'Authorization': 'Bearer API-ACCESS-TOKEN'
            },
            data : data
        };

        axios(createUser)
            .then(function (response) {
                message.channel.send(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
        });
    }
}