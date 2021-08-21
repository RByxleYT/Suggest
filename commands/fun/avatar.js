const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "avatar",
    category: "fun",
    description: "Gets the avatar of a user or yourself",
    usage: "avatar [@USER]",
    run: async(client, message, args) => {
       /* If user isnt found it selects ur profile */
        const member = message.mentions.members.first() || message.member;

        if (!member.user.avatarURL) return message.channel.send(`He does not have a avatar..`);

        const avatar = new Discord.MessageEmbed()
            .setTitle(`${member.user.username}'s Avatar`)
            
            .setColor("#91bfff").setFooter(client.user.username, config.AVATARURL)
            .setImage(member.user.displayAvatarURL({dynamic: true}))
            .setURL(member.user.displayAvatarURL({dynamic: true}))
        message.channel.send(avatar)
    }
};