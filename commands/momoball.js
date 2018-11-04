const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("Ask me anything you like! I'll eve tell you about the weird marks on one of Yuki's cheeks!");
   let replies = [
     "Of course! (。≧ω≦)ノ",
     "That’s right~! ｡\*(\*´∀`\*)\*｡゜゜",
     "Ah! That's not right! (\*´艸`*)☆彡",
     "Don’t say that… oyoyo… ;つд`)",
     "Hmm... Probably not.",
     "You're kidding, right?",
     "Nn... I guess you're right ;つд`)",
     "No way! Momo-chan won't allow it! <:myubutangery:454109952441712640>",
     "It's fine. You worry too much."
 ];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setColor("#fe00b6")
   .addField("Question:", question)
   .addField("Answer:", replies[result]);

   let botschannel = message.guild.channels.find(`name`, "bot-channel");
   if(!botschannel) return;
   return botschannel.send(ballembed);
}

module.exports.help = {
  name:"momo"
}
