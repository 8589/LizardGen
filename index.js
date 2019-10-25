// Config vars
let prefix = ".";
token = "NjM3MjMxMzk5NTM5MDQ4NDQ4.XbLKFQ.IPxfG77MNlUXz88AmIqWMb8TZL8"
// token = "NjM3MjMxMzk5NTM5MDQ4NDQ4.XbLKFQ.IPxfG77MNlUXz88AmIqWMb8TZL8"
// The number of links to send for scrappers
let numberOfLinksToSend = 10
// chat IDs where using scrappers is allowed
let allowedScrapperChats = ["637231605521448960"]
// let allowedScrapperChats = ["637231605521448960"]
allowedScrapperChats.map(id => id.toString())


const Discord = require('discord.js')
const bot = new Discord.Client()
const figlet = require('figlet');
const colors = require('colors');
const fetch = require('node-fetch')
const cheerio = require("cheerio")


// modules for finding/manipulating files
const path = require('path')
const fs = require('fs')


// Gloval vars
// change to what ever you want the server to serve (path relative)
fileDir = path.join(__dirname,"/Files")
// this is going to be the only chate the reload message works from (not 100% secure)
let files = []





// Escapes escape characters, so they count as text
function addSlashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}


// Get all the files in /files dir
function loadfiles(dir){
    let newfiles = []
    let addedFiles = []
    let removedFiles = []

    newfiles = fs.readdirSync(fileDir)
    
    //checks for newlly added/removed files (only checks whole files, not the changes in them)
    newfiles.forEach( file => {if(files.indexOf(file) == -1) addedFiles.push(file)})
    files.forEach(file =>  {if(newfiles.indexOf(file) == -1) removedFiles.push(file)})

    files = newfiles

    return {"addedFiles": addedFiles,
            "removedFiles": removedFiles}
}

// get a random line from a file
function randomLine(file){
    return new Promise(function(resolve, reject){
        fs.readFile(path.join(fileDir, file), (err, data) => {
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
    // console.clear();
    loadfiles(fileDir)

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
                .setTitle('Prefix is "."')
                .setDescription("All commands in #help")
                .addBlankField()
                .addField('Générateur premium', 'netflix\ndatabase\ntool\ne-book\nmethod\nscriptweb\nscriptbot\nleak\ncreditcard', true)
                .addField('Générateur basique', files, true)
                .setTimestamp()
                .setFooter(`Le Staff vous souhaite une bonne journée !`, `https://cdn.discordapp.com/attachments/636450237338222592/636795804052357159/MOSHED-2019-10-23-17-50-24.gif`)
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
            // in which case returns a line from it
            index = files.indexOf(args[0])
            if (index >=0) {

                
                randomLine(files[index]).then(data => {
                    if(data[1].includes(message.channel.id)){
                        let acc = data[0].split(":")
                        message.author.send(
                            new Discord.RichEmbed()
                            .setTitle(args[0])
                            .addField(`Here is your account`,`\nE-mail : ${acc[0] ? acc[0] : "N/A"}\nPassword : ${acc[1] ? acc[1] : "N/A"}\nTo help us : https://donatebot.io/checkout/637227559825965080`)
                            .setFooter('Official Maestro Generator')
                            .setThumbnail("http://makeagif.com/JDEs-H"))

                        message.channel.send(`${args[0]} -- **${message.author.username}** Generated Successfully`)
                    }}).catch(err => console.log(err))
            }
        }
    }
})


bot.login(token);
