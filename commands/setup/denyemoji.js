//Here the command starts
const config = require("../../config.json");
const Discord = require("discord.js")
module.exports = {
   //definition
	name: "denyemoji", //the name of the command 
	category: "setup", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "denyemoji <Emoji>", //this is for the help command for EACH cmd
  	description: "Changes the denyemoji of this Server", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Your are not allowed to run this command!");    
    let emoji = args[0];
    if (!emoji) return message.channel.send(new Discord.MessageEmbed()
      .setTitle("<:Decline:864080227738320896> Please add an emoji!")
      .setColor("EF4949")
      .setFooter(client.user.username, config.AVATARURL)  
      .setTimestamp());
    if(emoji.length == 18) emoji = message.guild.emojis.cache.get(args[0]);
    else{
      console.log(emoji)
    }
    message.reply( 
        new Discord.MessageEmbed()
            .setTitle("📬 Deny Emoji for Suggestions!")
            .setColor("#91bfff")
            .setDescription(`Deny emoji added: ${emoji}`)
            .setFooter(client.user.username + " Bot by: RByxle#9999", config.AVATARURL)  
        )
        client.settings.set(message.guild.id, emoji, `denyemoji`);
return; 
    }
}
