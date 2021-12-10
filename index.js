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



Client.on("guildChannelTopicUpdate", async (channel, oldT, newT) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let ctUP = new Discord.MessageEmbed()
    ctUP.setTitle("ChannelTopicUpdate")
    ctUP.setColor("PURPLE")
    ctUP.addField(`Channel:`, `${channel.name}[${channel.id}]`)
    ctUP.addField(`Topic:`, `${oldT} => ${newT}`)
    ctUP.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${channel.guild.iconURL()}` != "null") {
        ctUP.setThumbnail(`${channel.guild.iconURL({dynamic: true})}`)
    } else {
        ctUP.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    ctUP.setTimestamp()

    Logs.send({embeds: [ctUP]})
})  

//NT
Client.on("guildChannelPermissionsUpdate", async (channel, oldPerm, newPerm) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    //channel name emit this
    let cpUP = new Discord.MessageEmbed()
    cpUP.setTitle("ChannelUpdate")
    cpUP.setColor("PURPLE")
    cpUP.addField(`Channel:`, `${channel.name}[${channel.id}]`)
    cpUP.addField(`Not`, `Not`)
    cpUP.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${channel.guild.iconURL()}` != "null") {
        cpUP.setThumbnail(`${channel.guild.iconURL({dynamic: true})}`)
    } else {
        cpUP.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    cpUP.setTimestamp()

    Logs.send({embeds: [cpUP]})
})

//um
Client.on("guildMemberBoost", async (member) => {
    
    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let meBO = new Discord.MessageEmbed()
    meBO.setTitle(`${member.user.tag} Give Boost Thanks <3`)
    meBO.setColor("PURPLE")
    meBO.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    meBO.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        meBO.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        meBO.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    meBO.setTimestamp()


    Logs.send({embeds: [meBO]})
})

//um
Client.on("guildMemberUnboost", async (member) => {
    
    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let meUNBO = new Discord.MessageEmbed()
    meUNBO.setTitle(`${member.user.tag} Remove Boost`)
    meUNBO.setColor("PURPLE")
    meUNBO.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    meUNBO.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        meUNBO.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        meUNBO.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    meUNBO.setTimestamp()


    Logs.send({embeds: [meUNBO]})
})

Client.on("guildMemberRoleAdd", async (member, role) => {
    
    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let roAD = new Discord.MessageEmbed()
    roAD.setTitle("RoleAdd")
    roAD.setColor("PURPLE")
    roAD.addField(`Role:`, `${role.name}[${role.id}]`)
    roAD.addField(`User:`, `${member.user.tag}[${member.user.id}]`)
    roAD.addField(`UserRoles:`, `${member.roles.cache.map(role => role.toString()).join(' ')}`)
    roAD.addField(`RolePerms:`, `\`\`\`bash\n"${role.permissions.toArray().toString().replace(/,/gi, `",\n"`)}\n\`\`\``)
    roAD.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        roAD.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        roAD.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    roAD.setTimestamp()


    Logs.send({embeds: [roAD]})
})

Client.on("guildMemberRoleRemove", async (member, role) => {
    
    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let roRM = new Discord.MessageEmbed()
    roRM.setTitle("RoleRemove")
    roRM.setColor("PURPLE")
    roRM.addField(`Role:`, `${role.name}[${role.id}]`)
    roRM.addField(`User:`, `${member.user.tag}[${member.user.id}]`)
    roRM.addField(`UserRoles:`, `${member.roles.cache.map(role => role.toString()).join(' ')}`)
    roRM.addField(`RolePerms:`, `\`\`\`bash\n"${role.permissions.toArray().toString().replace(/,/gi, `",\n"`)}\n\`\`\``)
    roRM.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        roRM.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        roRM.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    roRM.setTimestamp()



    Logs.send({embeds: [roRM]})
})

Client.on("guildMemberNicknameUpdate", async (member, oldN, newN) => {
    
    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let niUP = new Discord.MessageEmbed()
    niUP.setTitle("MemberNicknameUpdate")
    niUP.setColor("PURPLE")
    niUP.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    niUP.addField(`NickName:`, `${oldN} => ${newN}`)
    niUP.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        niUP.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        niUP.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    niUP.setTimestamp()



    Logs.send({embeds: [niUP]})
})

Client.on("messagePinned", async (message) => {
    
    let Logs = Client.channels.cache.get(ids.Channels.Logs)
    await message.fetch().then(json => { 
        
        let mePI = new Discord.MessageEmbed()
        mePI.setTitle("MessagePined")
        mePI.setColor("PURPLE")
        mePI.addField(`Channel:`, `${message.channel.name}[${message.channel.id}]`)
        if (message.content != "" || message.content != "null") {
            if (message.content.leght >= 1000) {
                mePI.setDescription(`MessageContent:\`\`\`\n${message.content}\n\`\`\``)
            } else {
                mePI.addField(`MessageContent:`, `\`\`\`\n${message.content}\n\`\`\``)
            }
        } 
        mePI.addField(`MessageAuthor:`, `${message.author.tag}[${message.author.id}]`)
        mePI.addField(`MessageType:`, `${message.type}`)
        mePI.addField(`MessageURL:`, `**[here](${message.url})**`)
        mePI.addField(`React MessageFetchJson:`, `<:json_:898299786657140746>`)
        mePI.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
        if (`${message.guild.iconURL()}` != "null") {
            mePI.setThumbnail(`${message.guild.iconURL({dynamic: true})}`)
        } else {
            mePI.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
        }
        mePI.setTimestamp()

        

        Logs.send({embeds: [mePI]}).then(msg => {
            
            msg.react("898299786657140746").then(r2 => {})
        
            const filteraa = (reaction, user) => !user.bot && reaction.emoji.name === `json_` && reaction.users.remove(user) ;
            const COLE = msg.createReactionCollector({filter: filteraa})
    
        
            let JSONEMB = new Discord.MessageEmbed()
            JSONEMB.setTitle("JsonMessageFetch")
            JSONEMB.setColor("PURPLE")
            JSONEMB.setDescription(`Json:\`\`\`js\n${JSON.stringify(json, null, 3)}\`\`\``)

            COLE.on("collect", async (reac, user) => {
                msg.reply({content: `${user} Your MessageFetchJson`, embeds: [JSONEMB]})
                COLE.emit("end", "a")
            })
        })
    })
})

Client.on("voiceChannelJoin", async (member, channel) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let vcJN = new Discord.MessageEmbed()
    vcJN.setTitle("VoiceChannelJoin")
    vcJN.setColor("PURPLE")
    vcJN.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    vcJN.addField(`VoiceChannel:`, `${channel}[${channel.id}]`)
    if (channel.members === "undefined" || !channel.members) {
        vcJN.addField(`MembersList:`, `**Undefined**`)
    } else {
        vcJN.addField(`MembersList:`, `**${channel.members.map(mem => `${mem.user.tag}[${mem.user.id}]\n`).join(` `)}**`)  
    }
    vcJN.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        vcJN.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        vcJN.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    vcJN.setTimestamp()


    Logs.send({embeds: [vcJN]})
})

Client.on("voiceChannelLeave", async (member, channel) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let vcLV = new Discord.MessageEmbed()
    vcLV.setTitle("VoiceChannelLeave")
    vcLV.setColor("PURPLE")
    vcLV.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    vcLV.addField(`VoiceChannel:`, `${channel}[${channel.id}]`)
    if (channel.members === "undefined" || !channel.members) {
        vcLV.addField(`MembersList:`, `**Undefined**`)
    } else {
        vcLV.addField(`MembersList:`, `**${channel.members.map(mem => `${mem.user.tag}[${mem.user.id}]\n`).join(` `)}**`)  
    }
    vcLV.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        vcLV.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        vcLV.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    vcLV.setTimestamp()


    Logs.send({embeds: [vcLV]})
})

Client.on("voiceChannelSwitch", async (member, oldC, newC) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let vcSW = new Discord.MessageEmbed()
    vcSW.setTitle("VoiceChannelSwitch")
    vcSW.setColor("PURPLE")
    vcSW.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    vcSW.addField(`ChannelSwitch:`, `${oldC} => ${newC}`)
    if (oldC.members === "" || oldC.members.map(mi => `${mi.user.tag}`).join(` `) === "") {
        vcSW.addField(`oldChannelMembersList:`, `**Undefined or No have Members**`)
    } else {
        vcSW.addField(`oldChannelMembersList:`, `**${oldC.members.map(memb => `${memb.user.tag}[${memb.user.id}]\n`).join(` `)}**`)
    }
    vcSW.addField(`newChannelMembersList:`, `**${newC.members.map(memb => `${memb.user.tag}[${memb.user.id}]\n`).join(` `)}**`)
    vcSW.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        vcSW.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        vcSW.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    vcSW.setTimestamp()


    Logs.send({embeds: [vcSW]})
})

Client.on("voiceChannelMute", async (member, type) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let vcMT = new Discord.MessageEmbed()
    vcMT.setTitle("MemberMute")
    vcMT.setColor("PURPLE")
    vcMT.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    vcMT.addField(`MuteType:`, `**${type.toUpperCase().replace("-", " ")}**`)
    vcMT.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        vcMT.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        vcMT.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    vcMT.setTimestamp()


    Logs.send({embeds: [vcMT]})
})

Client.on("voiceChannelUnmute", async (member, type) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let vcUMT = new Discord.MessageEmbed()
    vcUMT.setTitle("MemberUnmute")
    vcUMT.setColor("PURPLE")
    vcUMT.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    vcUMT.addField(`UnmuteType:`, `**${type.toUpperCase().replace("-", " ")}**`)
    vcUMT.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        vcUMT.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        vcUMT.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    vcUMT.setTimestamp()


    Logs.send({embeds: [vcUMT]})
})

Client.on("voiceChannelDeaf", async (member, type) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let vcDF = new Discord.MessageEmbed()
    vcDF.setTitle("MemberDeaf")
    vcDF.setColor("PURPLE")
    vcDF.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    vcDF.addField(`DeafType:`, `**${type.toUpperCase().replace("-", " ")}**`)
    vcDF.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        vcDF.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        vcDF.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    vcDF.setTimestamp()


    Logs.send({embeds: [vcDF]})
})

Client.on("voiceChannelUndeaf", async (member, type) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let vcUDF = new Discord.MessageEmbed()
    vcUDF.setTitle("MemberUndeaf")
    vcUDF.setColor("PURPLE")
    vcUDF.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    vcUDF.addField(`UndeafType:`, `**${type.toUpperCase().replace("-", " ")}**`)
    vcUDF.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        vcUDF.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        vcUDF.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    vcUDF.setTimestamp()


    Logs.send({embeds: [vcUDF]})
})

Client.on("voiceStreamingStart", async (member, channel) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let vcSTST = new Discord.MessageEmbed()
    vcSTST.setTitle("MemberStartStream")
    vcSTST.setColor("PURPLE")
    vcSTST.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    vcSTST.addField(`Channel:`, `${channel}[${channel.id}]`)
    vcSTST.addField(`ChannelMembersList:`, `**${channel.members.map(mem => `${mem.user.tag}[${mem.user.id}]\n`).join(` `)}**`)  
    vcSTST.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        vcSTST.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        vcSTST.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    vcSTST.setTimestamp()


    Logs.send({embeds: [vcSTST]})
})

Client.on("voiceStreamingStop", async (member, channel) => {

    let Logs = Client.channels.cache.get(ids.Channels.Logs)

    let vcSTSP = new Discord.MessageEmbed()
    vcSTSP.setTitle("MemberStopStream")
    vcSTSP.setColor("PURPLE")
    vcSTSP.addField(`Member:`, `${member.user.tag}[${member.user.id}]`)
    vcSTSP.addField(`Channel:`, `${channel}[${channel.id}]`)
    vcSTSP.addField(`ChannelMembersList:`, `**${channel.members.map(mem => `${mem.user.tag}[${mem.user.id}]\n`).join(` `)}**`)  
    vcSTSP.setFooter(`Logs By Teox <3 | POISONED-DEVS.DE on Top`)
    if (`${member.guild.iconURL()}` != "null") {
        vcSTSP.setThumbnail(`${member.guild.iconURL({dynamic: true})}`)
    } else {
        vcSTSP.setThumbnail(`${Client.user.avatarURL({dynamic: true})}`)
    }
    vcSTSP.setTimestamp()


    Logs.send({embeds: [vcSTSP]})
})



///////////////////////////////////
//END


///////////////////////////////////
//COMMON


Client.on("messageCreate", async (message) => {

//CODE 
    
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
