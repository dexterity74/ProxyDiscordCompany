module.exports = {
    name: 'vallu',
    description: 'this command uses the api to grab all sub users in one file and sends it to admins',
    execute(message) {
        const axios = require('axios');
        const fs = require('fs');

        if(message.author.id != 'omitted' || message.author.id == 'omitted' || message.author.id == 'omitted') {
            console.log(message.author, '\n === WARNING USER TRYING TO USE VALLU COMMAND ===\n');
            return;
        }

        const getAllUsers = {
            method: 'get',
            url: 'https://reseller.packetstream.io/reseller/sub_users/view_all',
            headers: { 
                'Authorization': 'Bearer API-ACCESS-TOKEN'
            }
        };

        axios(getAllUsers)
            .then(function (response) {
                fs.writeFile('All-Current-Users.txt', JSON.stringify(response.data, null, 2), function(error) {
                    if(error) {
                        return console.log(error);
                    }
                    //console.log('\n === All users file created! === \n');
                });
                message.channel.send(message.author, {files: ['All-Current-Users.txt']});
            })
            .catch(function (error) {
                console.log(error);
        });
    }
}