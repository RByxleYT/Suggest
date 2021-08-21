//Here the command starts
const config = require("../../config.json");
const Discord = require("discord.js")
module.exports = {
   //definition
	name: "denymsg", //the name of the command 
	category: "setup", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "denymsg <text>", //this is for the help command for EACH cmd
  	description: "Changes the denymsg of this Server", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Your are not allowed to run this command!");    
     let txt = args.join(" ");
    if (!txt) return message.channel.send(new Discord.MessageEmbed()
      .setTitle("<:Decline:864080227738320896> Please add an Text!")
      .setColor("EF4949")
      .setDescription("Current Text: \n"+client.settings.get(message.guild.id, "denymsg"))
      .setFooter(client.user.username, config.AVATARURL)  
      .setTimestamp());

    message.reply( 
        new Discord.MessageEmbed()
            .setTitle("📬 denymsg for Suggestions!")
            .setColor("#91bfff")
            .setDescription(`Deny msg changed to:  ${txt}`)
            .setFooter(client.user.username + " Bot by: RByxle#9999", config.AVATARURL)  
        )
        client.settings.set(message.guild.id, txt, `denymsg`);
return; 
    }
}
