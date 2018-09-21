const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
const prefix = "m!";

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.legnth <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Ryuusou", {type:"WATCHING"});
});

bot.on('message', message => {
  if (message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = 'm!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

   let botschannel = message.guild.channels.find(`name`, "bot-channel");
   if(!botschannel) return;

     msg = message.content.toLowerCase();
     mention = message.mentions.users.first();

     if (msg.startsWith ("hey gays")) {
       return botschannel.send("And Gaku.");
     }

     if (msg.startsWith ("mocchi")) {
       if(message.author.id != "418976500688093186") return;
       return botschannel.send("Bliss! ε===(っ≧ω≦)っ");
     }

     if (msg.startsWith ("i love you momo")) {
       if(message.author.id != "418976500688093186") return;
       number = 2;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: botschannel.send ("It’s embarrassing to hear you say that! \(。ゝω・)ノ☆;:*"); break;
         case 2: botschannel.send ("Fufufu, I see you have fallen under my spell~ (///pωq///)"); break;
      }
    }

   if(msg.startsWith (prefix + "rank")) {
       number = 5;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: botschannel.send ("Yay! Let's celebrate with momorin!"); break;
         case 2: botschannel.send ("You did your best! I'm going to praise you!"); break;
         case 3: botschannel.send ("You got a passing grade!"); break;
         case 4: botschannel.send ("We're going to have intense special training tomorrow!"); break;
         case 5: botschannel.send ("Uuu... What happened?"); break;
      }
    }

    if (msg.startsWith (prefix + "scout")) {
      number = 45;
      imageNumber = Math.floor (Math.random() * (number)) + 1;
      botschannel.send ({files: ["./scout/" + imageNumber + ".png"]})
    }

  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
      }

      if(msg.startsWith (prefix + "quote")) {
        number = 24;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
          case 1: botschannel.send ("... Wha! I'm not sleeping! I absolutely wasn't sleeping just now!"); break;
          case 2: botschannel.send ("It makes me really happy, the fact that I can be together with Yuki."); break;
          case 3: botschannel.send ("My stomach is empty. I request immediate provisions. \nJust kidding!"); break;
          case 4: botschannel.send ("I wanna drink momorin..."); break;
          case 5: botschannel.send ("It's really easy to make Yuki laugh. It's cute!"); break;
          case 6: botschannel.send ("I wonder if you've become a fan of Re:vale?!"); break;
          case 7: botschannel.send ("I was drinking over at Yuki's place and we both passed out! (((⊂︵~⊃｡Д｡)⊃"); break;
          case 8: botschannel.send ("Ryu’s a total big brother type, after all! \nEven though I’m older, I called him \"Big Bro ❤\" once and he got super flustered, he was so cute I had to hug him~!! (\*/▽\*)+｡"); break;
          case 9: botschannel.send ("Re:vale is mature, TRIGGER is erotic, and IDOLiSH7 is cute! lol"); break;
          case 10: botschannel.send ("Ah, I gotta apologize to Tamaki  later for eating his puddings that one time. (\*‘ω’\*)"); break;
          case 11: botschannel.send ("peeks |ω ・)"); break;
          case 12: botschannel.send ("You're fun to message as always, lol. Sorry if you're busy right now..."); break;
          case 13: botschannel.send ("I'm so hungryyyy~~~"); break;
          case 14: botschannel.send ("Ryuu and I are workout buddies! \(○`・v・)人(・v・´●)ﾉ\nAnd since both Ryuu and Mitsuki are great cooks, it's fune to barbecue with them! I don't have to lift a finger!"); break;
          case 15: botschannel.send ("My type?\nLet’s see~, someone with long hair and manicured blue nails, who’s a great cook and bad with mornings, so I feel like I have to always be there for them...\nAh, also it’d be nice if they had a streak in their hair~."); break;
          case 16: botschannel.send ("Not being able to stand by Yuki has always been my greatest fear.\nBut a certain incident convinced me that the future I'm fearing won't come, so now I believe I'll be able to overcome any hardships along my way.\nBecause no matter how painful the future is, it won't be as bad as what I feared."); break;
          case 17: botschannel.send ("Practice makes perfect~!"); break;
          case 18: botschannel.send ("I have to pretend I'm a real senpai by helping out the young ones sometimes."); break;
          case 19: botschannel.send ("I had felt like my dreams were never gonna come true. But the moment I heard that song, all of my frustration and sadness were swept away. \nLike I had gotten washed clean by the waves."); break;
          case 20: botschannel.send ("On my off days, I exercise! I also eat yummy food!! Laughing and taking deep breaths before bed helps you relax naturally so I recommend that too! \nBut ny number one way is seeing my partner's smile! It melts away all my fatigue!"); break;
          case 21: botschannel.send ("What I like about myself is that I've got guts and stamina!\nThough I guess you could also that I'm too persistent..."); break;
          case 22: botschannel.send ("I'm not letting you go home tonight..."); break;
          case 23: botschannel.send ("I shined brighter and brighter so I wouldn't be outshined by the light I reached for. Before I realized it, that light became my own. That light is now shining the way for someone else."); break;
          case 24: botschannel.send ("Good work everyday, Maneko-chan! Thanks for making our everyday inspiring and happy! Here, I'll give you this Momorin with limited edition wrapper!"); break;
       }
     }

       if (msg.startsWith ("i can't believe ryo is dead")) {
         return botschannel.send("Finally.");
       }

       if (msg.startsWith ("good morning momo")) {
         return botschannel.send("Morning! I'll go my best today!");
       }

       if (msg.startsWith ("good night momo")) {
         return botschannel.send("Good night! Being a night owl is the natural enemy of your skin!");
       }

       if(cmd ===`${prefix}help`){
         let helpembed = new Discord.RichEmbed()
         .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
         .setColor("#fe00b6")
         .addField("Commands:","**m!momo** *<question>* | Ask him anything. \n**m!send** *<@user> <message>* | Send a DM to the mentioned user\n**m!scout** | Solo Yolo \n**m!quote** | Random quote\n**m!say** *<message>* | Have the bot say anything you want\n**m!help** | Displays this help message")
         .addField("Basic m!commands:", "mafia (alias:maf) || ryo || rank")
         .addField("Command phrases:", "I can't believe Ryo is dead || Hey gays || Good morning Momo || Good night Momo")
         return botschannel.send(helpembed);
       }

       if(cmd ===`${prefix}botinfo`){
       let bicon = bot.user.displayAvatarURL;
       let botembed = new Discord.RichEmbed()
         .setDescription("Bot Information")
         .setColor("#fe00b6")
         .setThumbnail(bicon)
         .addField("# of quotes:", "24")
         .addField("Scout:", "42 cards")
       return botschannel.send(botembed);
       }

         if(cmd === `${prefix}say`){
           let botmessage = args.join(" ");
           message.delete().catch();
           return message.channel.send(botmessage);
       }

       if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
         return botschannel.send("maf maf");
       }

       if(cmd === `${prefix}ryo`){
         return botschannel.send("Oh fuck. Bastard spotted.");
       }

});

bot.login(process.env.token);
