const Discord = require('discord.js')
const Bot = new Discord.Client()

// modules for finding/manipulating files
const path = require('path')
const fs = require('fs')


// CONFIG VARS

// commands prefix e.g. .help
const prefix = "."
// token to connect and controll the right Discord bot
const token = "NjEzNDY1NDU3MDYzODg2ODQ5.Xa8t-Q.luGqBMni54DlPjK8IR_SPRvwiKA"
// Directory where all the messages are stored
const filePath = path.join(__dirname,"/Files")
// The only chat that can reload files
const adminChatID = ""



// UsedVars
// fileName: [IDOfTheChatItIsPermited1, IDOfTheChatItIsPermited2]
let filesAndPermitions = {}
// just for ease of use... Holds the names of the files
let files =[]


// Escapes escape characters, so they count as text
function addSlashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
}


// Takes all the files from filePath, puts them into .CurrentlyUsedFiles
// also refreshes the filePermisions
async function reloadFiles() {
    let newfiles = []
    let addedFiles = []
    let removedFiles = []
    filesAndPermitions = {}

    newfiles = fs.readdirSync(filePath)
    
    //checks for newlly added/removed files (only checks whole files, not the changes in them)
    newfiles.forEach( file => {if(files.indexOf(file) == -1) addedFiles.push(file)})
    files.forEach(file =>  {if(newfiles.indexOf(file) == -1) removedFiles.push(file)})

    // check each file for their permitions if it has them add it to used files
    for (const file of newfiles){
        let fileContent = fs.readFileSync(path.join(filePath, file))
        let lines = fileContent.toString().split("\n")
        let permitions = getPermitions(lines[0])

        if (permitions === [] || permitions === null){
            console.log(`[*] ${file} Doens't have permitions`)
        } else {
            filesAndPermitions[file] = permitions
        }
    }
}

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

reloadFiles()
