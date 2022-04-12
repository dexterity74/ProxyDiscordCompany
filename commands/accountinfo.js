module.exports = {
    name: 'accountinfo',
    description: 'this command is for admins to view the reseller account info',
    execute(message) {
        const axios = require('axios');

        //if NOT admin
        if(message.author.id != 'omitted' || message.author.id == 'omitted' || message.author.id == 'omitted') {
            console.log(message.author, '\n === WARNING USER TRYING TO USE ACCOUNTINFO COMMAND ===\n');
            return;
        }

        const getBusinessInfo = {
            method: 'get',
            url: 'https://reseller.packetstream.io/reseller/my_info',
            headers: { 
                'Authorization': 'Bearer API-ACCESS-TOKEN'
            }
        };

        axios(getBusinessInfo)
            .then(function (response) {
                message.channel.send(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
        });
    }
}