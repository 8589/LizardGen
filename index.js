// Config vars
let prefix = ".";
token = "NjgyNjcxOTYxODIxOTM3OTMx.XpwDDg.YFxXbOwk-ZBvNu0bQujb5AaCwvk"

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
        bot.user.setActivity("Generator | .help")
    })
})

bot.on("message", message => {
    // check if a message begins with a prefix
    // if it does separete all words into a list (furure proffing if
    // some commands have arguments)
    if(message.content[0] == prefix){
        let args = message.content.substring(prefix.length).split(" ")
        args.map(arg => addSlashes(arg))
        if (message.content.startsWith(prefix + "stock")) {
            var amazon = fs.readFileSync('./Combos/amazon.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var cdiscount = fs.readFileSync('./Combos/cdiscount.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var crunchyroll = fs.readFileSync('./Combos/crunchyroll.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var deezer = fs.readFileSync('./Combos/deezer.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var discord = fs.readFileSync('./Combos/discord.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var disney = fs.readFileSync('./Combos/disney+.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var ea = fs.readFileSync('./Combos/ea.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var emailaccess = fs.readFileSync('./Combos/emailaccess.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var espn = fs.readFileSync('./Combos/espn.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var facebook = fs.readFileSync('./Combos/facebook.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var fitbit = fs.readFileSync('./Combos/fitbit.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var fortnite = fs.readFileSync('./Combos/fortnite.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var gmail = fs.readFileSync('./Combos/gmail.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var gucci = fs.readFileSync('./Combos/gucci.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var hbo = fs.readFileSync('./Combos/hbo.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var hulu = fs.readFileSync('./Combos/hulu.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var instagram = fs.readFileSync('./Combos/instagram.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var lol = fs.readFileSync('./Combos/lol.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var macys = fs.readFileSync('./Combos/macys.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var mcdonald = fs.readFileSync('./Combos/mcdonald.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var mega = fs.readFileSync('./Combos/mega.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var minecraft = fs.readFileSync('./Combos/minecraft.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var moviepass = fs.readFileSync('./Combos/moviepass.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var mycanal = fs.readFileSync('./Combos/mycanal.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var netflix = fs.readFileSync('./Combos/netflix.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var nordvpn = fs.readFileSync('./Combos/nordvpn.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var origin = fs.readFileSync('./Combos/origin.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var pandora = fs.readFileSync('./Combos/pandora.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var pornhub = fs.readFileSync('./Combos/pornhub.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var psn = fs.readFileSync('./Combos/psn.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var roblox = fs.readFileSync('./Combos/roblox.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var skinhub = fs.readFileSync('./Combos/skinhub.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var snapchat = fs.readFileSync('./Combos/snapchat.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var spotify = fs.readFileSync('./Combos/spotify.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var steam = fs.readFileSync('./Combos/steam.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var tidal = fs.readFileSync('./Combos/tidal.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var twitchtokens = fs.readFileSync('./Combos/twitchtokens.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var ubisoft = fs.readFileSync('./Combos/ubisoft.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var udemy = fs.readFileSync('./Combos/udemy.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var uplay = fs.readFileSync('./Combos/uplay.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var vyprvpn = fs.readFileSync('./Combos/vyprvpn.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var wish = fs.readFileSync('./Combos/wish.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var wwe = fs.readFileSync('./Combos/wwe.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var zee5 = fs.readFileSync('./Combos/zee5.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var zenmate = fs.readFileSync('./Combos/zenmate.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var zyngapoker = fs.readFileSync('./Combos/zyngapoker.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var anonfilelink = fs.readFileSync('./Links/anonfilelink.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var database = fs.readFileSync('./Links/database.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var ebook = fs.readFileSync('./Links/e-book.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var leak = fs.readFileSync('./Links/leak.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var method = fs.readFileSync('./Links/method.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var proxies = fs.readFileSync('./Links/proxies.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var scriptbot = fs.readFileSync('./Links/scriptbot.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var scriptweb = fs.readFileSync('./Links/scriptweb.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            var tool = fs.readFileSync('./Links/tool.txt', 'utf8').split(/\r\n|\r|\n/).length - 1;
            let stock = new Discord.RichEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
              .addField("**__GEN BASIC__**", `<:amazon:709463873090093089> **Amazon :** \`${amazon}\` comptes !
            <:Cdiscount:711674749570383933> **Cdiscount :** \`${cdiscount}\` comptes ! 
            <:crunchyroll:711640753813717044> **Crunchyroll :** \`${crunchyroll}\` comptes ! 
            <:Deezer:711962819125444618> **Deezer :** \`${deezer}\` comptes ! 
            <:discord:711640753176182869> **Discord :** \`${discord}\` comptes ! 
            <:Disneyplus:711664161331085312> **Disney :** \`${disney}\` comptes ! 
            <:EA:711675657129689128> **EA :** \`${ea}\` comptes ! 
            📧 **Email Access :** \`${emailaccess}\` comptes ! 
            <:ESPN:711955696941531318> **ESPN :** \`${espn}\` comptes ! 
            <:facebook:711640753482366996> **Facebook :** \`${facebook}\` comptes ! 
            <:Fitbit:711963865713213483> **Fitbit :** \`${fitbit}\` comptes ! 
            <:Fortnite:711663239317946459> **Fortnite :** \`${fortnite}\` comptes !  
            <:gmail:711640752865804379> **Gmail :** \`${gmail}\` comptes ! 
            <:GUCCI:711954024735178763> **Gucci :** \`${gucci}\` comptes !  
            <:HBO:711956036311056444> **HBO :** \`${hbo}\` comptes !  
            <:Hulu:711673765758763008> **Hulu :** \`${hulu}\` comptes !  
            <:instagram:711640752274407495> **Instagram :** \`${instagram}\` comptes !  
            <:Leagueoflegends:711954978721497118> **League of Legends :** \`${lol}\` comptes ! 
            <:Macys:711959621346001006> **Macys :** \`${macys}\` comptes ! 
            <:Mcdoanlds:711964337312366703> **Mcdonald :** \`${mcdonald}\` comptes !  
            <:Mega:711965063203913748> **Mega :** \`${mega}\` comptes !  
            <:Minecraft:711965450145366018> **Minecraft :** \`${minecraft}\` comptes ! 
            <:moviepass:711666147493412884> **MoviePass :** \`${moviepass}\` comptes !
            <:Mycanal:711960407719542796> **MyCanal :** \`${mycanal}\` comptes ! 
            <:netflix:711640752362618900> **Netflix :** \`${netflix}\` comptes ! 
            <:nordvpn:711640752723329135> **NordVPN :** \`${nordvpn}\` comptes !
            <:origin:711640751972286485> **Origin :** \`${origin}\` comptes !
            <:Pandora:711966674605310112> **Pandora :** \`${pandora}\` comptes !
            <:pornhub:711640751653781564> **Pornhub :** \`${pornhub}\` comptes !
            <:PSN:711675342276001867> **PSN :** \`${psn}\` comptes !
            <:roblox:711640752350036038> **Roblox :** \`${roblox}\` comptes ! 
            <:Skinhub:711967189208399873> **Skinhub :** \`${skinhub}\` comptes !
            <:snapchat:711640751573827624> **Snapchat :** \`${snapchat}\` comptes !
            <:spotify:711640753876631642> **Spotify :** \`${spotify}\` comptes !
            <:steam:711640750625914891> **Steam :** \`${steam}\` comptes !
            <:Tidal:711967524606181428> **Tidal :** \`${tidal}\` comptes !
            <:twitch:711640750424719462> **Twitch :** \`${twitchtokens}\` comptes !
            <:Ubisoft:711666873162399816> **Ubisoft :** \`${ubisoft}\` comptes !
            <:Udermy:711968650005053561> **Udemy :** \`${udemy}\` comptes !
            <:Uplay:711969089702330391> **Uplay :** \`${uplay}\` comptes !
            <:VyprVPN:711662524256354388> **VyprVPN :** \`${vyprvpn}\` comptes !
            <:Wish:711667459236692048> **Wish :** \`${wish}\` comptes !
            <:wwe:711666575480062093> **WWE :** \`${wwe}\` comptes !
            <:Zee5:711958687333482517> **Zee5 :** \`${zee5}\` comptes !
            <:ZenmateVPN:711668614230442055> **ZenmateVPN :** \`${zenmate}\` comptes !
            <:Zyngapoker:711957580162924574> **ZyngaPoker :** \`${zyngapoker}\` comptes !
            `, true)
            .addField("**__GEN PREMIUM__**", `
            <:anonfile:712774171607695491> **AnonFileLink :** \`${anonfilelink}\` !
            <:DataBase:711978731954241616> **Database :** \`${database}\` !
            <:Tools:711977781009055745> **Tool :** \`${tool}\` !
            <:Proxies:711972890597130300> **Proxies :** \`${proxies}\` !
            :bookmark: **E-Book :** \`${ebook}\` !
            <:Method:711979993831571466> **Method :** \`${method}\` !
            <:ScriptWeb:711979781541068901> **Script-Web :** \`${scriptweb}\` !
            :robot: **Script-Bot :** \`${scriptbot}\` !
            <:Leaks:711979145357295737> **Leak :** \`${leak}\` !
            `, true)
            .setThumbnail(message.guild.iconURL)
            .setColor("PURPLE")
            .setFooter("@Nyrok10 on Twitter", "https://cdn.discordapp.com/emojis/590848931852713984.png")
            .setTimestamp()
            message.channel.send(stock)
          }
        // Test for all available commands
        switch (args[0]) {

            // print the help message
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
