const Discord = require('discord.js');
const bot = new Discord.Client();
const figlet = require('figlet');
const colors = require('colors');

// TODO: logging
// TODO: allow only to ask from the server or spesific chat (if wanted)
// TODO: input sanitizing



// modules for finding/manipulating files
const path = require('path')
const fs = require('fs')


// Gloval vars
var prefix = ".";
token = "<Add token>"
// change to what ever you want the server to serve (path relative)
fileDir = path.join(__dirname,"/Cracks")
// this is going to be the only chate the reload message works from (not 100% secure)
adminChat = "admin"
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
    files.forEach( file =>  {if(newfiles.indexOf(file) == -1) removedFiles.push(file)})

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
            let line = lines[Math.round(Math.random() * lines.length) - 1]
            resolve(line)
        })
    })

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



//help
bot.on("message", message => {
    // check if a message begins with a prefix
    // if it does separete all words into a list (furure proffing if
    // some commands have arguments)
    if(message.content[0] == prefix){
        let args = message.content.substring(prefix.length).split(" ")

        // Test for all available commands
        switch (args[0]) {

            // print the help message
            case 'help':
                let sendembed = new Discord.RichEmbed()
                .setAuthor(`Requested by ${message.author.username}`)
                .setColor('BLACK')
                .setThumbnail("https://cdn.discordapp.com/attachments/610998589224910852/611126430280974356/GLITCH_20190814111519.gif")
                .addField("Voici les commandes du générateur :", files)
                .setFooter(`Le Staff vous souhaite une bonne journée !`)
                
                message.channel.send(sendembed)
                break;

            // update the bot with new files from fileDir (call when added or removed files)
            case "reload":
                if(message.channel.name == adminChat){
                    //reset the files, get names of added and removed ones
                    const {addedFiles, removedFiles} = loadfiles(fileDir)

                    let sendembed = new Discord.RichEmbed()
                    .setColor("RED")
                    .addField("Added Files", `Added: ${addedFiles.length > 0  ? addedFiles : "N/A"}`)
                    .addField("Removed Files", `Removed: ${removedFiles.length > 0  ? removedFiles : "N/A"}`)
                    .addField("All Files", `files: ${files.length > 0  ? files : "N/A"} `)
                    message.channel.send(sendembed)
                }
                break;
            }
        
        // works like a finally in the case switches
        if (args[0]){
            //Checks if the first argument is a file name
            // in which case returns a line from it
            index = files.indexOf(addSlashes(args[0]))
            if (index >=0) {

                let embed = new Discord.RichEmbed()
                   .setTitle(`${files[index]} \nhttps://discord.gg/jrzsC6F `)
                   .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
                   .setColor('#261a72')
                   .setFooter('Official Maestro Generator. ')

                message.author.send(embed)
                randomLine(files[index]).then(line => message.author.send(`Acc: ${line ? line : "N/A"}`))
                    .catch(err => console.log(err))
            }
        }
    }
})


bot.login(token);
