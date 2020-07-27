// Config vars
let prefix = ".";
token = "NzEzNDQ2NzYxMjkyNjI4MDA5.XsgPTw.Z-JqbZsEmS83_PyFiIXxNY2hVM4"

// The number of links to send for scrappers
let numberOfLinksToSend = 10
// chat IDs where using scrappers is allowed
let allowedScrapperChats = ["643087000949227580"]
// let allowedScrapperChats = ["643087000949227580"]
allowedScrapperChats.map(id => id.toString())

const Discord = require('discord.js')
const bot = new Discord.Client()
const figlet = require('figlet');
const colors = require('colors');
const fetch = require('node-fetch')
const cheerio = require("cheerio")
const fs = require('fs'); 

// modules for finding/manipulating  
const path = require('path')
// change to what ever you want the server to serve (path relative)
comboDir = path.join(__dirname,"./Combos")
linkDir = path.join(__dirname,"./Links")

// Gloval vars
// this is going to be the only chate the reload message works from (not 100% secure)
let linkFiles = []
let comboFiles = []

bot.login("NjgyNjcxOTYxODIxOTM3OTMx.Xn3GOg.QX1aLC3Q40XyfSglRBeZoczVP80")
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

// Escapes escape characters, so they count as text
function addSlashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

// get a random line from a file
function randomLine(fileDir){
    return new Promise(function(resolve, reject){
        fs.readFile(fileDir, (err, data) => {
            if (err) reject(err)

            //Weird thing but turns the line into string... (normal method for that doens't work)
            data = data + ''
            let lines = data.split('\n')
            let permitions = getPermitions(lines[0])
            let randomNumber = [Math.round(Math.random() * lines.length - 1)] 
            if (randomNumber == 0) {randomNumber = 1}
            line = lines[randomNumber]
            resolve([line, permitions])
        })
    })
}

// get all pastebin/archive first page paste links

function getPastebinLinks(){
    return new Promise((resolve, reject) => {
        fetch("https://pastebin.com/archive").then(response => {
            if (!response.ok){
                throw new Error("HTTP error, status = " + response.status)
                
            } 
            return response.text()
        }).then(html => {
            let nameUrlList = []
            const $ = cheerio.load(html) 
            $('.maintable a').each((i, el) => {
                nameUrlList.push([$(el).html(), `https://pastebin.com${$(el).attr('href')}`])
            })
            resolve(nameUrlList)
        }).catch(err => {console.log(err)})
    }
)}

// Checks if the first line in a file starts with ### if so 
// gets the following permitions: ### permitionID, permitionID2
function getPermitions(permitionLine){
    if (permitionLine.slice(0,3) === "###"){
        let permitions = permitionLine.slice(3, permitionLine.lenght).split(",")
        return permitions.map(permition => permition.trim())
    } else {
        return null
    }
}


bot.on("ready", () => {
    comboFiles = fs.readdirSync(comboDir)
    linkFiles = fs.readdirSync(linkDir)

    bot.guilds.forEach(function(guild) {

        console.log(`~[ Guild ${guild.name} Members ${guild.memberCount} ]~`)
        console.log((`   .ID du dompte: ${bot.user.id}`).white);
        console.log((`   .Connecté à : ${bot.user.tag}`).white);
        console.log((`   .Version De L'API Discord actuelle : ${Discord.version}`).white);

        console.log(figlet.textSync(".[ Yaikmic ].").red);
        bot.user.setActivity("Official server : https://discord.gg/Ux5uUD7")
    })
})

bot.on("message", message => {
    // check if a message begins with a prefix
    // if it does separete all words into a list (furure proffing if
    // some commands have arguments)
    if(message.content[0] == prefix){
        let args = message.content.substring(prefix.length).split(" ")
        args.map(arg => addSlashes(arg))
        // Test for all available commands
        switch (args[0]) {

            // print the help message
            case 'stock':
            var amazon = fs.readFileSync('./Combos/amazon', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var cdiscount = fs.readFileSync('./Combos/cdiscount', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var crunchyroll = fs.readFileSync('./Combos/crunchyroll', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var deezer = fs.readFileSync('./Combos/deezer', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var discord = fs.readFileSync('./Combos/discord', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var disney = fs.readFileSync('./Combos/disney+', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var ea = fs.readFileSync('./Combos/ea', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var emailaccess = fs.readFileSync('./Combos/emailaccess', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var espn = fs.readFileSync('./Combos/espn', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var facebook = fs.readFileSync('./Combos/facebook', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var fitbit = fs.readFileSync('./Combos/fitbit', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var fortnite = fs.readFileSync('./Combos/fortnite', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var gmail = fs.readFileSync('./Combos/gmail', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var gucci = fs.readFileSync('./Combos/gucci', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var hbo = fs.readFileSync('./Combos/hbo', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var hulu = fs.readFileSync('./Combos/hulu', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var instagram = fs.readFileSync('./Combos/instagram', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var lol = fs.readFileSync('./Combos/lol', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var macys = fs.readFileSync('./Combos/macys', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var mcdonald = fs.readFileSync('./Combos/mcdonald', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var mega = fs.readFileSync('./Combos/mega', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var minecraft = fs.readFileSync('./Combos/minecraft', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var moviepass = fs.readFileSync('./Combos/moviepass', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var mycanal = fs.readFileSync('./Combos/mycanal', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var netflix = fs.readFileSync('./Combos/netflix', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var nordvpn = fs.readFileSync('./Combos/nordvpn', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var origin = fs.readFileSync('./Combos/origin', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var pandora = fs.readFileSync('./Combos/pandora', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var pornhub = fs.readFileSync('./Combos/pornhub', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var psn = fs.readFileSync('./Combos/psn', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var roblox = fs.readFileSync('./Combos/roblox', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var skinhub = fs.readFileSync('./Combos/skinhub', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var snapchat = fs.readFileSync('./Combos/snapchat', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var spotify = fs.readFileSync('./Combos/spotify', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var steam = fs.readFileSync('./Combos/steam', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var tidal = fs.readFileSync('./Combos/tidal', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var twitchtokens = fs.readFileSync('./Combos/twitchtokens', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var ubisoft = fs.readFileSync('./Combos/ubisoft', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var udemy = fs.readFileSync('./Combos/udemy', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var uplay = fs.readFileSync('./Combos/uplay', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var vyprvpn = fs.readFileSync('./Combos/vyprvpn', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var wish = fs.readFileSync('./Combos/wish', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var wwe = fs.readFileSync('./Combos/wwe', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var zee5 = fs.readFileSync('./Combos/zee5', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var zenmate = fs.readFileSync('./Combos/zenmate', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var zyngapoker = fs.readFileSync('./Combos/zyngapoker', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var anonfilelink = fs.readFileSync('./Links/anonfilelink', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var database = fs.readFileSync('./Links/database', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var ebook = fs.readFileSync('./Links/e-book', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var leak = fs.readFileSync('./Links/leak', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var method = fs.readFileSync('./Links/method', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var proxies = fs.readFileSync('./Links/proxies', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var scriptbot = fs.readFileSync('./Links/scriptbot', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var scriptweb = fs.readFileSync('./Links/scriptweb', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var tool = fs.readFileSync('./Links/tool', 'utf8').split(/\r\n|\r|\n/).length - 1;
            let stock = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .addField("**__GEN BASIC__**", `<:amazon:709463873090093089> **Amazon :** \`${amazon}\`
                <:Cdiscount:711674749570383933> **Cdiscount :** \`${cdiscount}\` 
                <:crunchyroll:711640753813717044> **Crunchyroll :** \`${crunchyroll}\` 
                <:Deezer:711962819125444618> **Deezer :** \`${deezer}\` 
                <:discord:711640753176182869> **Discord :** \`${discord}\` 
                <:Disneyplus:711664161331085312> **Disney :** \`${disney}\` 
                <:EA:711675657129689128> **EA :** \`${ea}\` 
                📧 **E-Access :** \`${emailaccess}\` 
                <:ESPN:711955696941531318> **ESPN :** \`${espn}\` 
                <:facebook:711640753482366996> **Facebook :** \`${facebook}\` 
                <:Fitbit:711963865713213483> **Fitbit :** \`${fitbit}\` 
                <:Fortnite:711663239317946459> **Fortnite :** \`${fortnite}\`  
                <:gmail:711640752865804379> **Gmail :** \`${gmail}\`
                `, true)
                .addField("**__GEN BASIC__**", `
                <:GUCCI:711954024735178763> **Gucci :** \`${gucci}\`  
                <:HBO:711956036311056444> **HBO :** \`${hbo}\`  
                <:Hulu:711673765758763008> **Hulu :** \`${hulu}\`  
                <:instagram:711640752274407495> **Instagram :** \`${instagram}\`  
                <:Leagueoflegends:711954978721497118> **LoL :** \`${lol}\` 
                <:Macys:711959621346001006> **Macys :** \`${macys}\` 
                <:Mcdoanlds:711964337312366703> **Mcdonald :** \`${mcdonald}\`  
                <:Mega:711965063203913748> **Mega :** \`${mega}\`  
                <:Minecraft:711965450145366018> **Minecraft :** \`${minecraft}\` 
                <:moviepass:711666147493412884> **MoviePass :** \`${moviepass}\`
                <:Mycanal:711960407719542796> **MyCanal :** \`${mycanal}\` 
                <:netflix:711640752362618900> **Netflix :** \`${netflix}\` 
                `, true)
                .addField("**__GEN BASIC__**", `
                <:nordvpn:711640752723329135> **NordVPN :** \`${nordvpn}\`
                <:origin:711640751972286485> **Origin :** \`${origin}\`
                <:Pandora:711966674605310112> **Pandora :** \`${pandora}\`
                <:pornhub:711640751653781564> **Pornhub :** \`${pornhub}\`
                <:PSN:711675342276001867> **PSN :** \`${psn}\`
                <:roblox:711640752350036038> **Roblox :** \`${roblox}\` 
                <:Skinhub:711967189208399873> **Skinhub :** \`${skinhub}\`
                <:snapchat:711640751573827624> **Snapchat :** \`${snapchat}\`
                <:spotify:711640753876631642> **Spotify :** \`${spotify}\`
                <:steam:711640750625914891> **Steam :** \`${steam}\`
                <:Tidal:711967524606181428> **Tidal :** \`${tidal}\`
                <:twitch:711640750424719462> **Twitch :** \`${twitchtokens}\`
                <:Ubisoft:711666873162399816> **Ubisoft :** \`${ubisoft}\`
                `, true)
                .addField("**__GEN BASIC__**", `
                <:Udermy:711968650005053561> **Udemy :** \`${udemy}\`
                <:Uplay:711969089702330391> **Uplay :** \`${uplay}\`
                <:VyprVPN:711662524256354388> **VyprVPN :** \`${vyprvpn}\`
                <:Wish:711667459236692048> **Wish :** \`${wish}\`
                <:wwe:711666575480062093> **WWE :** \`${wwe}\`
                <:Zee5:711958687333482517> **Zee5 :** \`${zee5}\`
                <:ZenmateVPN:711668614230442055> **ZenmateVPN :** \`${zenmate}\`
                <:Zyngapoker:711957580162924574> **ZyngaPoker :** \`${zyngapoker}\`
                `, true)
                .addField("**__GEN PREMIUM__**", `
                <:anonfile:712774171607695491> **AnonFileLink :** \`${anonfilelink}\`
                <:DataBase:711978731954241616> **Database :** \`${database}\`
                <:Tools:711977781009055745> **Tool :** \`${tool}\`
                <:Proxies:711972890597130300> **Proxies :** \`${proxies}\`
                :bookmark: **E-Book :** \`${ebook}\`
                <:Method:711979993831571466> **Method :** \`${method}\`
                <:ScriptWeb:711979781541068901> **Script-Web :** \`${scriptweb}\`
                :robot: **Script-Bot :** \`${scriptbot}\`
                <:Leaks:711979145357295737> **Leak :** \`${leak}\`
                `, true)
                .setThumbnail(message.guild.iconURL)
                .setColor("PURPLE")
                .setTimestamp()
            message.channel.send(stock)
            break;
            case 'help':
                let sendembed = new Discord.RichEmbed()
                .setColor('BLACK')
                .setThumbnail("https://cdn.discordapp.com/attachments/636450237338222592/636795804052357159/MOSHED-2019-10-23-17-50-24.gif")
                .setURL("https://donatebot.io/checkout/667129262368751626")
                .setTitle('Prefix is "."')
                .setDescription("To see all stocks do .stock")
                .addBlankField()
                .addField('Générateur premium', 'database\ntool\nproxies\ne-book\nmethod\nscriptweb\nscriptbot\nleak\nto get more contact Yaikmic', true)
                .addField('Générateur basique', comboFiles, true)
                .setTimestamp()
                .setFooter(`Enjoy and don't forget to vouch !`, `https://cdn.discordapp.com/attachments/636450237338222592/636795804052357159/MOSHED-2019-10-23-17-50-24.gif`)
                message.channel.send(sendembed)
                break

            case 'pastebin':
                if(allowedScrapperChats.indexOf(message.channel.id >=0)){
                    getPastebinLinks().then(nameUrlList => {
                        let embededLinks = new Discord.RichEmbed()
                        let iteratable = nameUrlList.length < numberOfLinksToSend ? nameUrlList.lenght : numberOfLinksToSend
                        for(let i = 0; i < iteratable; i++) {
                            embededLinks.addField(nameUrlList[i][0],nameUrlList[i][1])
                        }
                        message.channel.send(embededLinks)
                    })
                }
            break
}
        
        // works like a finally in the case switches
        if (args[0]){
            //Checks if the first argument is a file name
            // in which case formats the line (for now there are 2 formats:
            // combos (email:password) 
            // links, each line has 1 link
            // 
            // formats them accordinly and sends them the requester
            
            // first item -- type of line it will have, second -- the path for the files to read from
            let toRead = []
            let comboIndex = comboFiles.indexOf(args[0])
            let linkIndex = linkFiles.indexOf(args[0])

            // Set the toRead list for reading files and sending messages
            if (comboIndex >= 0) {toRead[0] = "combo"; toRead[1] = path.join(comboDir, comboFiles[comboIndex])}
            if (linkIndex >= 0) {toRead[0] = "link"; toRead[1] = path.join(linkDir, linkFiles[linkIndex])}
            
            if (toRead[0]) {
                randomLine(toRead[1]).then(data => {
                if(data[1].includes(message.channel.id)){

                    switch (toRead[0]){

                    case "combo":
                    let acc = data[0].split(":")
                    message.author.send(
                        new Discord.RichEmbed()
                        .setTitle(args[0])
                        .addField(`Here is your account`,`\nE-mail : ${acc[0] ? acc[0] : "N/A"}\nPassword : ${acc[1] ? acc[1] : "N/A"}\nTo help us : https://donatebot.io/checkout/667129262368751626`)
                        .setFooter('Official Maestro Generator')
                        .setThumbnail("https://thumbs.gfycat.com/LimpEnchantingAfricanelephant-small.gif"))
                        break

                    case "link":
                        message.author.send(
                            new Discord.RichEmbed()
                            .setTitle(args[0])
                            .addField("Here is your link:", `[ ${data[0]} ]`)
                            .setFooter('Official Maestro Generator')
                            .setThumbnail("https://thumbs.gfycat.com/LimpEnchantingAfricanelephant-small.gif")
                        )
                        break
                    }
            
                    message.channel.send(`**${message.author.username}**\n${args[0]} Successfully Generated\nLook your DMs.`)
                }}).catch(err => console.log(err))
            }
        }
    }
})


bot.login(token);
