// Config vars
let prefix = ".";
token = "NjgyNjcxOTYxODIxOTM3OTMx.Xn3GOg.QX1aLC3Q40XyfSglRBeZoczVP80"

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


// modules for finding/manipulating  
const path = require('path')
const fs = require('fs')
// change to what ever you want the server to serve (path relative)
comboDir = path.join(__dirname,"./Combos")
linkDir = path.join(__dirname,"./Links")

// Gloval vars
// this is going to be the only chate the reload message works from (not 100% secure)
let linkFiles = []
let comboFiles = []




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

        console.log(figlet.textSync(".[ CMD ON ].").red);
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
        // Test for all available commands
        switch (args[0]) {

            // print the help message
            case 'help':
                let sendembed = new Discord.RichEmbed()
                .setColor('BLACK')
                .setThumbnail("https://cdn.discordapp.com/attachments/636450237338222592/636795804052357159/MOSHED-2019-10-23-17-50-24.gif")
                .setURL("https://donatebot.io/checkout/639098012169404426")
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
                        .addField(`Here is your account`,`\nE-mail : ${acc[0] ? acc[0] : "N/A"}\nPassword : ${acc[1] ? acc[1] : "N/A"}\nTo help us : https://donatebot.io/checkout/639098012169404426`)
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
