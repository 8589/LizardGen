
    var sendembed = new Discord.RichEmbed()

    .setAuthor(`Requested by ${message.author.username}`)
    .setColor("BLACK")
    .addField("FR :\n\nVôtre compte a été généré avec succès.", `Le bot vous a envoyé le compte en message privé !`)
    .addBlankField()
    .addField("ENG :\n\nYour account has been successfully generated.", `The bot sent you the account in private message!`)
    .setFooter(`Le Staff vous souhaite une bonne journée !`)
    .setTimestamp()