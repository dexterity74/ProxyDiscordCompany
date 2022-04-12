module.exports = {
    name: 'mag',
    description: 'this command tells users how much data they have left',
    execute(message) {
        const axios = require('axios');
        const fs = require('fs');

        message.author.send('check remaining data');

        //sub-user command only, haven't paid for service yet
    }
}