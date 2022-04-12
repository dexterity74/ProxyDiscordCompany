var authorizedUsers = function(message) {

    //me
    if(message.author.id == 'omitted') {
        //var proxyHost = 'proxy.packetstream.io:31112';
        var username = 'omitted';
        var password = 'ORs0Sd2FNWkgNpYZ';
        var usernameNoShow = '||omitted||';
        var passwordNoShow = '||ORs0Sd2FNWkgNpYZ||';
    }
    //leo
    else if(message.author.id == 'omitted user') {
        //var proxyHost = 'proxy.packetstream.io:31112';
        var username = 'omitted user';
        var password = 'ORs0Sd2FNWkgNpYZ';
        var usernameNoShow = '||omitted user||';
        var passwordNoShow = '||ORs0Sd2FNWkgNpYZ||';
    }
    //anthony
    else if(message.author.id == 'omitted user') {
        //var proxyHost = 'proxy.packetstream.io:31112';
        var username = 'omitted user';
        var password = 'ORs0Sd2FNWkgNpYZ';
        var usernameNoShow = '||omitted user||';
        var passwordNoShow = '||ORs0Sd2FNWkgNpYZ||';
    }
    //barn
    else if(message.author.id == 'omitted user') {
        //var proxyHost = '54.82.25.138:31112';
        var username = 'omitted user';
        var password = 'ORs0Sd2FNWkgNpYZ';
        var usernameNoShow = '||omitted user||';
        var passwordNoShow = '||ORs0Sd2FNWkgNpYZ||';
    }
    //Hugo
    else if(message.author.id == 'omitted user') {
        //var proxyHost = '54.82.25.138:31112';
        var username = 'omitted user';
        var password = 'ORs0Sd2FNWkgNpYZ';
        var usernameNoShow = '||omitted user||';
        var passwordNoShow = '||ORs0Sd2FNWkgNpYZ||';
    }
    //Burner tester
    else if(message.author.id == 'omitted user') {
        //var proxyHost = '54.82.25.138:31112';
        var username = 'omitted user';
        var password = 'ORs0Sd2FNWkgNpYZ';
        var usernameNoShow = '||omitted user||';
        var passwordNoShow = '||ORs0Sd2FNWkgNpYZ||';
    }

    //will be api once we get API token

    //if a user doesn't exist
    else{
        message.author.send('**——— You are not authorized to use this bot! ———**');
        client.channels.cache.get('omitted channel').send(message.author, 'User is unauthorized and trying to use the bot');
        client.channels.cache.get('omitted channel').send(' ^^^^ User is unauthorized and trying to use the bot');
        console.log(message.author, '\n ——— Unauthorized user trying to use Discord bot ——— \n');
        return;
    }
    return [username, usernameNoShow, password, passwordNoShow];
}

module.exports = authorizedUsers;