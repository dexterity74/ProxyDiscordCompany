module.exports = {
    name: 'findun',
    description: 'this command finds a users sub-user username depending on Discord ID',
    execute(message, args) {

         //if NOT admin
        if(message.author.id != 'omitted' || message.author.id == 'omitted' || message.author.id == 'omitted') {
            console.log(message.author, '\n === WARNING USER TRYING TO USE FINDUN COMMAND ===\n');
            return;
        }

        //create a test to find the username for a specified user
        if(args.length < 1) {
            message.channel.send('**=== Not enough arguments: Format is** `!findun {discord id}` **===**');
            return;
        }
        if(args.length > 1) {
            message.channel.send('**=== Too many arguments: Format is** `!findun {discord id}` **===**');
            return;
        }

        //admins
        if(args[0] == 'omitted') {
            message.channel.send('This is " " packetstream username');
            message.channel.send('omitted');
        }
        //leo
        else if(args[0] == 'omitted') {
            message.channel.send('This is " " packetstream username because he admin');
            message.channel.send('omitted');
        }
        //ant
        else if(args[0] == 'omitted') {
            message.channel.send('This is " " packetstream username because she admin');
            message.channel.send('omitted');
        }
        //barn
        else if(args[0] == 'omitted') {
            message.channel.send('This is subuser test packetstream username because we cant make sub users yet');
            message.channel.send('omitted');
        }
        //if a user doesn't exist
        else{
            message.author.send('User does not have a sub-user account');
            return;
        }
    }
}