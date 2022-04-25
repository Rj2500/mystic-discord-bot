const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const {User} = require("discord.js");
{
    Discord = require("discord.js"),
client = new Discord.Client({ intents: [ Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILDS ] })
client.login('ODU5MTIxNTY3MDg5OTUwNzQx.YNoFTw.eGCB1vcRlcBofegY8LpHCklI0kw')


client.on("ready", async (client) => {
	client.user.setPresence({status: 'idle' });
    client.user.setActivity("all of the beautiful contestants chat together.", { type: 'WATCHING'});	
console.log("Mystic Bot#1717 is online!");})
}//Startup

{
    var commandsEmbed = {
    color: 0x03fcd3,
    title: "CUSTOM BOT COMMANDS",
    description: "**All of the Custom Bot Commands currently available**\n**(NOTE: this bot's prefix is 'm/')**\n\n*ccmds:* That's this command!\n*twitch:* Mystic's official Twitch Streamers!\n*roles:* `ROLES IS CURRENTLY IN DEVELOPMENT AND DOESN'T WORK`",
    timestamp: new Date(),
    footer: {
        text: "Coded by RJ Doss",
    }
}

var twitchEmbed = {
    color: 0x03fcd3,
    title: "Mystic Twitch Streamers",
    description: "\n**Twitch Streamers**\n\n**Tohie**: https://twitch.tv/otohie\n**Powerplace09**: https://twitch.tv/powerplace09",
    thumbnail: {
        url: "https://imgur.com/HSCsk7C"
    },
    timestamp: new Date(),
    footer: {
        text: "Coded by RJ Doss"
    }
}
}//Embeds

{

client.on("messageCreate", async message => {
    if (message.content === "m/ccmds") {
        message.delete();
       message.channel.send({ embeds: [commandsEmbed] });
    }
})

client.on("messageCreate", async message =>{
    if (message.content === "m/twitch") {
        message.reply({ embeds: [twitchEmbed] });
    }
})

client.on("messageCreate", async message => {
    if (message.content === "m/roles") {
        message.delete();
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId('roles')
            .setPlaceholder('Select a reaction role')
            .addOptions([
                { 
                    label: 'Reaction Role 1',
                    description: 'Take this role by clicking me ',
                    value: 'first_option',
                    emoji: "1052",
                },
                {
                    label: 'Reaction Role 2',
                    description: 'Take this role by clicking me ',
                    value: 'second_option',
                   emoji: "1053",
                },
                {
                    label: 'Reaction Role 3',
                    description: 'Take this role by clicking me ',
                    value: 'third_option',
                 emoji: "1054",
                },
                {
                    label: 'Reaction Role 4',
                    description: 'Take this role by clicking me ',
                    value: 'fourth_option',
                   emoji: "1055",
                },
                {
                    label: 'Reaction Role 5',
                    description: 'Take this role by clicking me s',
                    value: 'fifth_option',
                    emoji: "1056",
                },
            ]),
    );

        
    }
})

}//Commands
