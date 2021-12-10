const Discord = require("discord.js");
const intents = new Discord.Intents([
    "GUILDS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_INVITES",
    "GUILD_BANS",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_PRESENCES",
    "GUILD_VOICE_STATES",
    "GUILD_WEBHOOKS",
    "DIRECT_MESSAGES"
]) 
const Client = new Discord.Client({intents: intents});

const moment = require("moment");
const fetch = require("node-fetch");

const config = require("./src/json/config.json");
const ids = require("./src/json/ids.json");

const LogsExtra = require("discord-logs");
LogsExtra(Client, {
    debug: false
});

///////////////////////////////////
//EXTRA








///////////////////////////////////
//END


///////////////////////////////////
//COMMON


Client.on("messageCreate", async (message) => {

    let guild = Client.guilds.cache.get("895349885363159140")
    let channe1 = guild.channels.cache.get("895349885363159144")
    let channe2 = guild.channels.cache.get("898646096769847317")

    if (message.content.toString().toLowerCase() === "asdfjnkfejhbkejblfljbkwalbjkflbkjwakjbflbjhvkfjlhvbklk") {
    }
})

Client.on("messageDelete", async (message) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    if (message.author.bot) { return; }

    let DeleE = new Discord.MessageEmbed()
    DeleE.setTitle("MessageDeleted")
    DeleE.setColor("PURPLE")
    if (message.content.length >= 1000) {
        DeleE.setDescription(`MessageContent:\`\`\`\n${message.content}\n\`\`\``)
    } else {
        DeleE.addField(`MessageContent:`, `\`\`\`\n${message.content}\n\`\`\``, true)  
    }
    DeleE.addField(`Channel:`, `${message.channel}[${message.channelId}]`)
    DeleE.addField(`User:`, `${message.author.tag}[${message.author.id}]`)
    DeleE.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${message.guild.iconURL()}` != "null") {
        DeleE.setThumbnail(`${message.guild.iconURL({dynamic: true})}`)
    } else {
        DeleE.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    DeleE.setTimestamp()


    Logs.send({embeds: [DeleE]})
})

Client.on("messageUpdate", async (oldM, newM) => {
    
    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    if (oldM.author.bot) { return; }

    let updaE = new Discord.MessageEmbed()
    updaE.setTitle("MessageEdited")
    updaE.setColor("PURPLE")
    if (newM.content.length >= 1000) {
        updaE.setDescription(`oldMessageContent:\`\`\`\n${oldM.content}\n\`\`\``)
        updaE.setDescription(`newMessageContent:\`\`\`\n${newM.content}\n\`\`\``)
    } else {
        updaE.addField(`oldMessageContent:`, `\`\`\`\n${oldM.content}\n\`\`\``, true)  
        updaE.addField(`newMessageContent:`, `\`\`\`\n${newM.content}\n\`\`\``, true)  
    }
    updaE.addField(`Channel:`, `${newM.channel}[${newM.channelId}]`)
    updaE.addField(`User:`, `${oldM.author.tag}[${oldM.author.id}]`)
    updaE.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${newM.guild.iconURL()}` != "null") {
        updaE.setThumbnail(`${newM.guild.iconURL({dynamic: true})}`)
    } else {
        updaE.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    updaE.setTimestamp()


    Logs.send({embeds: [updaE]})
})

Client.on("channelCreate", async (channel) => {
    
    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let chaCE = new Discord.MessageEmbed()
    chaCE.setTitle("ChannelCreated")
    chaCE.setColor("PURPLE")
    chaCE.addField(`Channel:`, `${channel.name}[${channel.id}]`)
    chaCE.addField(`Channel_Category:`, `${channel.parent}[${channel.parentId}]`)
    chaCE.addField(`Channel_Type:`, `${channel.type}`)
    chaCE.addField(`Channel_Position:`, `${channel.position}`)
    chaCE.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${channel.guild.iconURL()}` != "null") {
        chaCE.setThumbnail(`${channel.guild.iconURL({dynamic: true})}`)
    } else {
        chaCE.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    chaCE.setTimestamp()
    

    Logs.send({embeds: [chaCE]})
})

Client.on("channelDelete", async (channel) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)
    
    if (channel.type === "DM") return;

    let chaDE = new Discord.MessageEmbed()
    chaDE.setTitle("ChannelDeleted")
    chaDE.setColor("PURPLE")
    chaDE.addField(`Channel:`, `${channel.name}[${channel.id}]`)
    chaDE.addField(`Channel_Category:`, `${channel.parent}[${channel.parentId}]`)
    chaDE.addField(`Channel_Type:`, `${channel.type}`)
    chaDE.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${channel.guild.iconURL()}` != "null") {
        chaDE.setThumbnail(`${channel.guild.iconURL({dynamic: true})}`)
    } else {
        chaDE.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    chaDE.setTimestamp()


    Logs.send({embeds: [chaDE]})
})

Client.on("roleCreate", async (role) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let roCE = new Discord.MessageEmbed()
    roCE.setTitle("RoleCreated")
    roCE.setColor("PURPLE")
    roCE.addField(`Role:`, `${role.name}[${role.id}]`)
    roCE.addField(`Role_HexColor:`, `${role.hexColor}`)
    roCE.addField(`Role_Hoist:`, `${role.hoist}`)
    roCE.addField(`Role_Position:`, `${role.position}`)
    roCE.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${role.guild.iconURL()}` != "null") {
        roCE.setThumbnail(`${role.guild.iconURL({dynamic: true})}`)
    } else {
        roCE.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    roCE.setTimestamp()


    Logs.send({embeds: [roCE]})
})

Client.on("roleDelete", async (role) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let roDE = new Discord.MessageEmbed()
    roDE.setTitle("RoleDeleted")
    roDE.setColor("PURPLE")
    roDE.addField(`Role:`, `${role.name}[${role.id}]`)
    roDE.addField(`Role_HexColor:`, `${role.hexColor}`)
    roDE.addField(`Role_Hoist:`, `${role.hoist}`)
    roDE.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${role.guild.iconURL()}` != "null") {
        roDE.setThumbnail(`${role.guild.iconURL({dynamic: true})}`)
    } else {
        roDE.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    roDE.setTimestamp()
    

    Logs.send({embeds: [roDE]})
})

Client.on("roleUpdate", async (oldR, newR) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    if (oldR.rawPosition != newR.rawPosition) return;


    let roUE = new Discord.MessageEmbed()
    roUE.setTitle("RoleUpdate")
    roUE.setColor("PURPLE")
    if (oldR.name != newR.name) {
        roUE.addField(`Name_Update:`, `${oldR.name} => ${newR.name}`)  
    } else {
        roUE.addField(`Role:`, `${newR.name}[${newR.id}]`)
    }
    if (oldR.hexColor != newR.hexColor) {
        roUE.addField(`HexColor_Update:`, `${oldR.hexColor} => ${newR.hexColor}`)
    }
    if (oldR.position != newR.position) {
        roUE.addField(`Position_Update:`, `${oldR.position} => ${newR.position}`)  
    }
    if (oldR.permissions.toArray().toString() != newR.permissions.toArray().toString()) {
        roUE.addField(`Permissions_Update:`, `[-] ${newR.permissions.toArray().toString().toLowerCase().replace(/_/g, ' ').replace(/,/g, '\n [-] ')}`)
    }
    roUE.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${newR.guild.iconURL()}` != "null") {
        roUE.setThumbnail(`${newR.guild.iconURL({dynamic: true})}`)
    } else {
        roUE.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    roUE.setTimestamp()
    


    Logs.send({embeds: [roUE]})
})

Client.on("emojiCreate", async (emoji) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let emCT = new Discord.MessageEmbed()
    emCT.setTitle("EmojiCreated")
    emCT.setColor("PURPLE")
    emCT.addField(`Emoji_Name:`, `${emoji.name}`)
    emCT.addField(`Emoji_Id:`, `${emoji.id}`)
    emCT.addField(`Emoji_Animated:`, `${emoji.animated}`) 
    if (emoji.animated) {
        emCT.addField(`Emoji_Normal:`, `<a:${emoji.name}:${emoji.id}>`) 
        emCT.addField(`Emoji_</>:`, `\`\`\`js\n<a:${emoji.name}:${emoji.id}>\n\`\`\``)  
    } else {
        emCT.addField(`Emoji_Normal:`, `<:${emoji.name}:${emoji.id}>`) 
        emCT.addField(`Emoji_</>:`, `\`\`\`js\n<:${emoji.name}:${emoji.id}>\n\`\`\``)  
    }
    emCT.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${emoji.guild.iconURL()}` != "null") {
        emCT.setThumbnail(`${emoji.guild.iconURL({dynamic: true})}`)
    } else {
        emCT.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    emCT.setTimestamp()


    Logs.send({embeds: [emCT]})
})

Client.on("emojiDelete", async (emoji) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let emDE = new Discord.MessageEmbed()
    emDE.setTitle("EmojiDeleted")
    emDE.setColor("PURPLE")
    emDE.addField(`Emoji_Name:`, `${emoji.name}`)
    emDE.addField(`Emoji_Id:`, `${emoji.id}`)
    emDE.addField(`Emoji_Animated:`, `${emoji.animated}`)
    emDE.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${emoji.guild.iconURL()}` != "null") {
        emDE.setThumbnail(`${emoji.guild.iconURL({dynamic: true})}`)
    } else {
        emDE.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    emDE.setTimestamp()


    Logs.send({embeds: [emDE]})
})

Client.on("emojiUpdate", async (oldE, newE) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let emUP = new Discord.MessageEmbed()
    emUP.setTitle("EmojiUpdate")
    emUP.setColor("PURPLE")
    if (oldE.name != newE.name) {
        emUP.addField(`Name_Update:`, `${oldE.name} => ${newE.name}`)
    }
    if (oldE.animated && newE.animated) {
        emUP.addField(`Emoji_Normal:`, `<a:${newE.name}:${newE.id}>`)
        emUP.addField(`Emoji_</>:`, `\`\`\`js\n<a:${newE.name}:${newE.id}>\n\`\`\``) 
    } else {
        emUP.addField(`Emoji_Normal:`, `<:${newE.name}:${newE.id}>`)
        emUP.addField(`Emoji_</>:`, `\`\`\`js\n<:${newE.name}:${newE.id}>\n\`\`\``) 
    }
    emUP.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${newE.guild.iconURL()}` != "null") {
        emUP.setThumbnail(`${newE.guild.iconURL({dynamic: true})}`)
    } else {
        emUP.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    emUP.setTimestamp()

    Logs.send({embeds: [emUP]})
})

//welcome
Client.on("guildMemberAdd", async (member) => {
    
    let Logs = Client.channels.cache.get(ids.Channels.Welcome)

    let weE = new Discord.MessageEmbed()
    weE.setTitle(`Welcome | Poisoned-Devs.de`)
    weE.setColor("PURPLE")
    weE.setDescription(`Welcome on the Official Discord server from Poisoned-Devs.de!\n\nWe are a Development Team that creates sites for you for free or for a little price\n\nCreate a Ticket <#888478099228987393> or text\nbusiness@poisoned-devs.de for support over mail`)
    weE.setThumbnail(Client.user.avatarURL({dynamic: true, format: "png"}).toString())
    weE.setAuthor(`${member.user.tag}`, `${member.user.avatarURL({dynamic: true})}`)
    weE.setFooter(`UserId: ${member.user.id} | Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    weE.setTimestamp()


    Logs.send({content: `${member}`, embeds: [weE]})
})

//goodbye
Client.on("guildMemberRemove", async (member) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let goE = new Discord.MessageEmbed()
    goE.setTitle("Bye Bye")
    goE.setColor("PURPLE")
    goE.setDescription(`${member.user.tag} Left The ${member.guild.name} Server.`)
    goE.setThumbnail(Client.user.avatarURL({dynamic: true, format: "png"}).toString())
    goE.setAuthor(`${member.user.tag}`, `${member.user.avatarURL({dynamic: true, format: "png"})}`)
    goE.setFooter(`UserId:${member.user.id} | Logs by Teox <3 | POISONED-DEVS.DE on Top`)
    goE.setTimestamp()
    


    Logs.send({embeds: [goE]})
})


///////////////////////////////////
//END



Client.on("ready", async () => {
    console.log(`Ready => ${Client.user.tag}[${Client.user.id}]`)
});

Client.login(config.token);