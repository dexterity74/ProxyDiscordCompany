const channelBlacklist = function(message) {
    if(message.channel.name == 'admin-chat') {
        message.author.send('You must DM me to operate!');
        message.delete();

        return;
    }
    if(message.channel.name == 'test-channel') {
        message.author.send('You must DM me to operate!');
        message.delete();
        
        return;
    }
    if(message.channel.name == 'fnf-chat') {
        message.author.send('You must DM me to operate!');
        message.delete();
        
        return;
    }
    if(message.channel.name == 'chat') {
        message.author.send('You must DM me to operate!');
        message.delete();
        
        return;
    }
    if(message.channel.name == 'important') {
        message.author.send('You must DM me to operate!');
        message.delete();
        
        return;
    }
    if(message.channel.name == 'giveaways') {
        message.author.send('You must DM me to operate!');
        message.delete();
        
        return;
    }
}

module.exports = channelBlacklist;