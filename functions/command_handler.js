const commandHandler = function(client, message, command, args, username, usernameNoShow, password, passwordNoShow) {
    switch(command) {
        
        //ADMIN COMMANDS TO MANAGE USERS
        case 'accountinfo':
            
            client.commands.get('accountinfo').execute(message);

            break;
        case 'adminhelp':

            client.commands.get('adminhelp').execute(message);
        
            break;
        case 'findun':

            client.commands.get('findun').execute(message, args);

            break;
        case 'csu':

            client.commands.get('csu').execute(message, args);

            break;
        case 'vssu':
            
            client.commands.get('vssu').execute(message, args);

            break;
        case 'vsuth':

            client.commands.get('vsuth').execute(message, args);
            
            break;
        case 'rsupak':
            
            client.commands.get('rsupak').execute(message, args);

            break;
        case 'addsub':
           
            client.commands.get('addsub').execute(message, args);
            
                break;
        case 'sfsub':
            
            client.commands.get('sfsub').execute(message, args);

            break;
        case 'vallu':

            client.commands.get('vallu').execute(message);
            
            break;

        //ALL USERS COMMANDS
        case 'mag':

            client.commands.get('mag').execute(message);
            
            break;
        case 'reload':
            
            client.commands.get('reload').execute(message, args, username, usernameNoShow, password, passwordNoShow);

            break;
        case 'countries':

            client.commands.get('countries').execute(message);

            break;
        case 'help':
            
            client.commands.get('help').execute(message);
            
            break;
        default:
            message.author.send('**=== Invalid command, if you need help type** `!help` **===**');
            
            break;
    }
}

module.exports = commandHandler;