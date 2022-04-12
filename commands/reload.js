module.exports = {
    name: 'reload',
    description: 'this command creates a proxy list depending on user input',
    execute(message, args, username, usernameNoShow, password, passwordNoShow) {
        //required libraries
        const Discord = require('discord.js');
        const fs = require('fs');

        if(args.length < 3) {
            message.channel.send('**——— Not enough arguments: Format is** `!reload {country} {ip type} {quantity}` **———**');
            return;
        }
        if(args.length > 3) {
            message.channel.send('**——— Too many arguments: Format is** `!reload {country} {ip type} {quantity}` **———**');
            return;
        }

        //list of country constants
        if(args[0].toLowerCase() == 'us') {
            var country = '_country-UnitedStates';
        }
        else if(args[0].toLowerCase() == 'uk') {
            var country = '_country-UnitedKingdom';
        }
        else if(args[0].toLowerCase() == 'au') {
            var country = '_country-Australia';
        }
        else if(args[0].toLowerCase() == 'de') {
            var country = '_country-Germany';
        }
        else if(args[0].toLowerCase() == 'be') {
            var country = '_country-Belgium';
        }
        else if(args[0].toLowerCase() == 'af') {
            var country = '_country-Afghanistan';
        }
        else if(args[0].toLowerCase() == 'al') {
            var country = '_country-Albania';
        }
        else if(args[0].toLowerCase() == 'dz') {
            var country = '_country-Algeria'
        }
        else if(args[0].toLowerCase() == 'ar') {
            var country = '_country-Argentina'; 
        }
        else if(args[0].toLowerCase() == 'am') {
            var country = '_country-Armenia'
        }
        else if(args[0].toLowerCase() == 'aw') {
            var country = '_country-Aruba'; 
        }
        else if(args[0].toLowerCase() == 'at') {
            var country = '_country-Austria'; 
        }
        else if(args[0].toLowerCase() == 'az') {
            var country = '_country-Azerbaijan'; 
        }
        else if(args[0].toLowerCase() == 'bs') {
            var country = '_country-Bahamas'; 
        }
        else if(args[0].toLowerCase() == 'bh') {
            var country = '_country-Bahrain';
        }
        else if(args[0].toLowerCase() == 'bd') {
            var country = '_country-Bangladesh';
        }
        else if(args[0].toLowerCase() == 'bv') {
            var country = '_country-Belarus';
        }
        else if(args[0].toLowerCase() == 'ba') {
            var country = '_country-BosniaandHerzegovina';
        }
        else if(args[0].toLowerCase() == 'br') {
            var country = '_country-Brazil';  
        }
        else if(args[0].toLowerCase() == 'bi') {
            var country = '_country-BritishVirginIslands';  
        }
        else if(args[0].toLowerCase() == 'bn') {
            var country = '_country-Brunei'; 
        }
        else if(args[0].toLowerCase() == 'bg') {
            var country = '_country-Bulgaria';  
        }
        else if(args[0].toLowerCase() == 'kh') {
            var country = '_country-Cambodia';  
        }
        else if(args[0].toLowerCase() == 'cm') {
            var country = '_country-Cameroon';  
        }
        else if(args[0].toLowerCase() == 'cl') {
            var country = '_country-Chile';  
        }
        else if(args[0].toLowerCase() == 'cn') {
            var country = '_country-China';  
        }
        else if(args[0].toLowerCase() == 'co') {
            var country = '_country-Colombia';  
        }
        else if(args[0].toLowerCase() == 'cr') {
            var country = '_country-CostaRica'; 
        }
        else if(args[0].toLowerCase() == 'hr') {
            var country = '_country-Croatia';  
        }
        else if(args[0].toLowerCase() == 'cu') {
            var country = '_country-Cuba';
        }
        else if(args[0].toLowerCase() == 'cy') {
            var country = '_country-Cyprus';  
        }
        else if(args[0].toLowerCase() == 'cz') {
            var country = '_country-Czechia'; 
        } 
        else if(args[0].toLowerCase() == 'dk') {
            var country = '_country-Denmark';  
        }
        else if(args[0].toLowerCase() == 'do') {
            var country = '_country-DominicanRepublic';
        }
        else if(args[0].toLowerCase() == 'ec') {
            var country = '_country-Ecuador';
        }
        else if(args[0].toLowerCase() == 'eg') {
            var country = '_country-Egypt';
        }
        else if(args[0].toLowerCase() == 'sv') {
            var country = '_country-ElSalvador';
        }
        else if(args[0].toLowerCase() == 'ee') {
            var country = '_country-Estonia';
        }
        else if(args[0].toLowerCase() == 'et') {
            var country = '_country-Ethiopia';
        }
        else if(args[0].toLowerCase() == 'fi') {
            var country = '_country-Finland';
        }
        else if(args[0].toLowerCase() == 'fr') {
            var country = '_country-France';
        }
        else if(args[0].toLowerCase() == 'ge') {
            var country = '_country-Georgia';
        }
        else if(args[0].toLowerCase() == 'gh') {
            var country = '_country-Ghana';
        }
        else if(args[0].toLowerCase() == 'gr') {
            var country = '_country-Greece';
        }
        else if(args[0].toLowerCase() == 'gt') {
            var country = '_country-Guatemala';
        }
        else if(args[0].toLowerCase() == 'gy') {
            var country = '_country-Guyana';
        }
        else if(args[0].toLowerCase() == 'hj') {
            var country = '_country-HashemiteKingdomofJordan';
        }
        else if(args[0].toLowerCase() == 'hk') {
            var country = '_country-HongKong';
        }
        else if(args[0].toLowerCase() == 'hu') {
            var country = '_country-Hungary';
        }
        else if(args[0].toLowerCase() == 'in') {
            var country = '_country-India';
        }
        else if(args[0].toLowerCase() == 'id') {
            var country = '_country-Indonesia';
        }
        else if(args[0].toLowerCase() == 'ir') {
            var country = '_country-Iran';
        }
        else if(args[0].toLowerCase() == 'iq') {
            var country = '_country-Iraq';
        }
        else if(args[0].toLowerCase() == 'ie') {
            var country = '_country-Ireland';
        }
        else if(args[0].toLowerCase() == 'il') {
            var country = '_country-Israel';
        }
        else if(args[0].toLowerCase() == 'it') {
            var country = '_country-Italy';
        }
        else if(args[0].toLowerCase() == 'jm') {
            var country = '_country-Jamaica';
        }
        else if(args[0].toLowerCase() == 'jp') {
            var country = '_country-Japan';
        }
        else if(args[0].toLowerCase() == 'kz') {
            var country = '_country-Kazakhstan';
        }
        else if(args[0].toLowerCase() == 'ke') {
            var country = '_country-Kenya';
        }
        else if(args[0].toLowerCase() == 'ko') {
            var country = '_country-Kosovo';
        }
        else if(args[0].toLowerCase() == 'kw') {
            var country = '_country-Kuwait';
        }
        else if(args[0].toLowerCase() == 'lv') {
            var country = '_country-Latvia';
        }
        else if(args[0].toLowerCase() == 'li') {
            var country = '_country-Liechtenstein';
        }
        else if(args[0].toLowerCase() == 'lu') {
            var country = '_country-Luxembourg';
        }
        else if(args[0].toLowerCase() == 'mk') {
            var country = '_country-Macedonia';
        }
        else if(args[0].toLowerCase() == 'mg') {
            var country = '_country-Madagascar';
        }
        else if(args[0].toLowerCase() == 'my') {
            var country = '_country-Malaysia';
        }
        else if(args[0].toLowerCase() == 'mu') {
            var country = '_country-Mauritius';
        }
        else if(args[0].toLowerCase() == 'mx') {
            var country = '_country-Mexico';
        }
        else if(args[0].toLowerCase() == 'mn') {
            var country = '_country-Mongolia';
        }
        else if(args[0].toLowerCase() == 'me') {
            var country = '_country-Montenegro';
        }
        else if(args[0].toLowerCase() == 'ma') {
            var country = '_country-Morocco';
        }
        else if(args[0].toLowerCase() == 'mz') {
            var country = '_country-Mozambique';
        }
        else if(args[0].toLowerCase() == 'mm') {
            var country = '_country-Myanmar';
        }
        else if(args[0].toLowerCase() == 'np') {
            var country = '_country-Nepal';
        }
        else if(args[0].toLowerCase() == 'nl') {
            var country = '_country-Netherlands';
        }
        else if(args[0].toLowerCase() == 'nz') {
            var country = '_country-New Zealand';
        }
        else if(args[0].toLowerCase() == 'ng') {
            var country = '_country-Nigeria';
        }
        else if(args[0].toLowerCase() == 'no') {
            var country = '_country-Norway';
        }
        else if(args[0].toLowerCase() == 'om') {
            var country = '_country-Oman';
        }
        else if(args[0].toLowerCase() == 'pk') {
            var country = '_country-Pakistan';
        }
        else if(args[0].toLowerCase() == 'ps') {
            var country = '_country-Palestine';
        }
        else if(args[0].toLowerCase() == 'pa') {
            var country = '_country-Panama';
        }
        else if(args[0].toLowerCase() == 'pg') {
            var country = '_country-PapuaNewGuinea';
        }
        else if(args[0].toLowerCase() == 'py') {
            var country = '_country-Paraguay';
        }
        else if(args[0].toLowerCase() == 'pe') {
            var country = '_country-Peru';
        }
        else if(args[0].toLowerCase() == 'ph') {
            var country = '_country-Philippines';
        }
        else if(args[0].toLowerCase() == 'pl') {
            var country = '_country-Poland';
        }
        else if(args[0].toLowerCase() == 'pt') {
            var country = '_country-Portugal';
        }
        else if(args[0].toLowerCase() == 'pr') {
            var country = '_country-Puerto Rico';
        }
        else if(args[0].toLowerCase() == 'qa') {
            var country = '_country-Qatar';
        }
        else if(args[0].toLowerCase() == 'lt') {    
            var country = '_country-RepublicofLithuania';
        }
        else if(args[0].toLowerCase() == 'md') {
            var country = '_country-RepublicofMoldova';
        }
        else if(args[0].toLowerCase() == 'ro') {
            var country = '_country-Romania';
        }
        else if(args[0].toLowerCase() == 'ru') {
            var country = '_country-Russia';
        }
        else if(args[0].toLowerCase() == 'sa') {
            var country = '_country-SaudiArabia';
        }
        else if(args[0].toLowerCase() == 'sn') {
            var country = '_country-Senegal';
        }
        else if(args[0].toLowerCase() == 'rs') {
            var country = '_country-Serbia';
        }
        else if(args[0].toLowerCase() == 'sc') {
            var country = '_country-Seychelles';
        }
        else if(args[0].toLowerCase() == 'sg') {
            var country = '_country-Singapore';
        }
        else if(args[0].toLowerCase() == 'sk') {
            var country = '_country-Slovakia';
        }
        else if(args[0].toLowerCase() == 'si') {
            var country = '_country-Slovenia';
        }
        else if(args[0].toLowerCase() == 'so') {
            var country = '_country-Somalia';
        }
        else if(args[0].toLowerCase() == 'za') {
            var country = '_country-SouthAfrica';
        }
        else if(args[0].toLowerCase() == 'kr') {
            var country = '_country-SouthKorea';
        }
        else if(args[0].toLowerCase() == 'es') {
            var country = '_country-Spain';
        }
        else if(args[0].toLowerCase() == 'lk') {
            var country = '_country-SriLanka';
        }
        else if(args[0].toLowerCase() == 'sd') {
            var country = '_country-Sudan';
        }
        else if(args[0].toLowerCase() == 'sr') {
            var country = '_country-Suriname';
        }
        else if(args[0].toLowerCase() == 'se') {
            var country = '_country-Sweden';
        }
        else if(args[0].toLowerCase() == 'ch') {
            var country = '_country-Switzerland';
        }
        else if(args[0].toLowerCase() == 'sy') {
            var country = '_country-Syria';
        }
        else if(args[0].toLowerCase() == 'tw') {
            var country = '_country-Taiwan';
        }
        else if(args[0].toLowerCase() == 'tj') {
            var country = '_country-Tajikistan';T
        }
        else if(args[0].toLowerCase() == 'th') {
            var country = '_country-Thailand';
        }
        else if(args[0].toLowerCase() == 'tt') {
            var country = '_country-TrinidadandTobago';
        }
        else if(args[0].toLowerCase() == 'tn') {
            var country = '_country-Tunisia';
        }
        else if(args[0].toLowerCase() == 'tr') {
            var country = '_country-Turkey';
        }
        else if(args[0].toLowerCase() == 'ug') {
            var country = '_country-Uganda';
        }
        else if(args[0].toLowerCase() == 'ua') {
            var country = '_country-Ukraine';
        }
        else if(args[0].toLowerCase() == 'ae') {
            var country = '_country-UnitedArabEmirates';
        }
        else if(args[0].toLowerCase() == 'uz') {
            var country = '_country-Uzbekistan';
        }
        else if(args[0].toLowerCase() == 've') {
            var country = '_country-Venezuela';
        }
        else if(args[0].toLowerCase() == 'vn') {
            var country = '_country-Vietnam';
        }
        else if(args[0].toLowerCase() == 'zm') {    
            var country = '_country-Zambia';
        }
        else
        {
            message.author.send('**——— Double check your country soldier! ———**');
            return;
        }
        
        const session = '_session-';

        //rand uses function to get random number for random IP selection to avoid using DNS Hostname
        const rand = getRandomInt(16);

        if(rand == 0) {
            var proxyHost = '52.86.132.182:31112';
        }
        else if(rand == 1) {
            var proxyHost = '35.170.220.35:31112';
        }
        else if(rand == 2) {
            var proxyHost = '54.210.205.252:31112';
        }
        else if(rand == 3) {
            var proxyHost = '34.205.217.130:31112';
        }
        else if(rand == 4) {
            var proxyHost = '34.224.43.116:31112';
        }
        else if(rand == 5) {
            var proxyHost = '3.89.0.170:31112';
        }
        else if(rand == 6) {
            var proxyHost = '52.203.199.107:31112';
        }
        else if(rand == 7) {
            var proxyHost = '34.232.147.202:31112';
        }
        else if(rand == 8) {
            var proxyHost = '34.196.234.127:31112';
        }
        else if(rand == 9) {
            var proxyHost = '54.144.229.207:31112';
        }
        else if(rand == 10) {
            var proxyHost = '34.199.225.190:31112';
        }
        else if(rand == 11) {
            var proxyHost = '54.82.25.138:31112';
        }
        else if(rand == 12) {
            var proxyHost = '50.16.219.147:31112';
        }
        else if(rand == 13) {
            var proxyHost = '34.200.21.192:31112';
        }
        else if(rand == 14) {
            var proxyHost = '52.207.66.179:31112';
        }
        else if(rand == 15) {
            var proxyHost = '3.212.159.243:31112';
        }
        else{
            console.log('——— REALLY BAD ERROR ———');
        }

        if(message.author.id == '138068477175922688') {
            var proxyHost = 'proxy.packetstream.io:31112';
            
        }
        //leo
        else if(message.author.id == '135316626701549568') {
            var proxyHost = 'proxy.packetstream.io:31112';
            
        }
        //anthony
        else if(message.author.id == '376231808418840577') {
            var proxyHost = 'proxy.packetstream.io:31112';
        }

        //preemptively added chosen host to user:pass
        var proxy = proxyHost + ':' + username + ':' + password;

        //args[0] = 
        //first set of if-else's check if ip type was correct or invalid
        if(args[1].toLowerCase() == 'static') {
            //if user asking for more than 5000 proxies
            if(args[2] > 5000) {
                message.author.send('**——— Magainze capacity is 5,000 solider! ———**');
                return;
            }
            //if user is asking for less than 0 proxies
            else if(args[2] <= 0) {
                message.author.send('**——— Are you trying to harm everyone?! ———**');
                return;
            }
            else{
                var logger = fs.createWriteStream('./proxylists/BulletProxies' + args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase() + args[0].toUpperCase() + '.txt');
                var proxyLine;
                
                for(let i = 0; i < args[2]; i++) {
                    proxyLine = proxy + country + session + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    logger.write(proxyLine);
                    logger.write('\n');
                }
                const Embed = new Discord.MessageEmbed()
                    .setColor(0xb4975a)
                    .setTitle('Bullet Count')
                    .setDescription('*Now get out there maggots!*')
                    .addFields({
                        name: 'Username', 
                        value: usernameNoShow,
                    })
                    .addFields({
                        name: 'Password', 
                        value: passwordNoShow,
                    })
                    .addFields({
                        name: 'Country', 
                        value: args[0].toUpperCase(),
                    })
                    .addFields({
                        name: 'IP Type', 
                        value: args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase(),
                    })
                    .addFields({
                        name: 'Ammunition', 
                        value: args[2],
                    })
                    .setTimestamp()
                    .setFooter('Bullet Proxies LLC', 'https://cdn.discordapp.com/attachments/740267016547467267/742318464701693992/7ae2b660f6e3bb5ba517743346af86b3.png');
                message.author.send(Embed);

                message.author.send(message.author, {files: ['./proxylists/BulletProxies' + args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase() + args[0].toUpperCase() + '.txt']});
                return;
            }
        }
        else if(args[1].toLowerCase() == 'rotating') {
            if(args[2] > 5000) {
                message.author.send('**——— Magainze capacity is 5,000 solider! ———**');
                return;
            }
            else if(args[2] <= 0) {
                message.author.send('**——— Are you trying to kill everyone?! ———**');
                return;
            }
            else{
                var logger = fs.createWriteStream('./proxylists/BulletProxies' + args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase() + args[0].toUpperCase() + '.txt');
                var proxyLine;
                
                for(let i = 0; i < args[2]; i++) {
                    proxyLine = proxy + country;
                    logger.write(proxyLine);
                    logger.write('\n');
                }
                const Embed = new Discord.MessageEmbed()
                    .setColor(0xb4975a)
                    .setTitle('Bullet Count')
                    .setDescription('*Now get out there maggots!*')
                    .addFields({
                        name: 'Username', 
                        value: usernameNoShow,
                    })
                    .addFields({
                        name: 'Password', 
                        value: passwordNoShow,
                    })
                    .addFields({
                        name: 'Country', 
                        value: args[0].toUpperCase(),
                    })
                    .addFields({
                        name: 'IP Type', 
                        value: args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase(),
                    })
                    .addFields({
                        name: 'Ammunition', 
                        value: args[2],
                    })
                    .setTimestamp()
                    .setFooter('Bullet Proxies LLC', 'https://cdn.discordapp.com/attachments/740267016547467267/742318464701693992/7ae2b660f6e3bb5ba517743346af86b3.png');
                message.author.send(Embed);

                message.author.send(message.author, {files: ['./proxylists/BulletProxies' + args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase() + args[0].toUpperCase() + '.txt']});
                return;
            }
        }
        else{
            message.author.send('**——— IP type options are only "static" or "rotating"! ———**');
            return;
        }

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    }
}