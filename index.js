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
   bot.user.setActivity("Oh no", {type:0});
  });

bot.on('message', message => {
//   if (message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = 'm!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

//   Redirect to a specific channel
   let botschannel = message.guild.channels.find(channel => channel.name === 'bot-channel');
   if(!botschannel) return;

     msg = message.content.toLowerCase();
     mention = message.mentions.users.first();

     if (msg.startsWith ("hey gays")) {
       return message.channel.send("And Gaku.");
     }

     if (msg.startsWith ("i love you momo")) {
       if(message.author.id != "418976500688093186")
       return botschannel.send ("Momo-chan loves you too! I hope you keep watching over my happy life with a smile!!");
       number = 5;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: message.channel.send ("It’s embarrassing to hear you say that! \(。ゝω・)ノ☆;:*"); break;
         case 2: message.channel.send ("Fufufu, I see you have fallen under my spell~ (///pωq///)"); break;
         case 3: message.channel.send ("Bliss! You're so cute! Marry me~ <:mocchi:508556774199263273>"); break;
         case 4: message.channel.send ("I love you too! I hope you keep watching over my happy life with a smile!!"); break
         case 5: message.channel.send ("Your blunt honesty is making me blush! ><//"); break;
      }
    }

    if (msg.startsWith (prefix + "mofu")) {
      number = 1;
      imageNumber = Math.floor (Math.random() * (number)) + 1;
      return message.channel.send ({files: ["./images/mofumofu/" + imageNumber + ".png"]})
    }

    if (msg.startsWith (prefix + "scout")) {
      number = 61;
      imageNumber = Math.floor (Math.random() * (number)) + 1;
      return message.channel.send ({files: ["./images/scout/" + imageNumber + ".png"]})
    }
  
//    if (msg.startsWith (prefix + "scout")) {
//     return botschannel.send ({files:["./images/scout/51.png"]});
//   }

  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
      }

      if(msg.startsWith (prefix + "quote")) {
        number = 25;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
          case 1: message.channel.send ("... Wha! I'm not sleeping! I absolutely wasn't sleeping just now!"); break;
          case 2: message.channel.send ("It makes me really happy, the fact that I can be together with Yuki."); break;
          case 3: message.channel.send ("My stomach is empty. I request immediate provisions. \nJust kidding!"); break;
          case 4: message.channel.send ("I wanna drink momorin..."); break;
          case 5: message.channel.send ("It's really easy to make Yuki laugh. It's cute!"); break;
          case 6: message.channel.send ("I wonder if you've become a fan of Re:vale?!"); break;
          case 7: message.channel.send ("I was drinking over at Yuki's place and we both passed out! (((⊂︵~⊃｡Д｡)⊃"); break;
          case 8: message.channel.send ("Ryu’s a total big brother type, after all! \nEven though I’m older, I called him \"Big Bro ❤\" once and he got super flustered, he was so cute I had to hug him~!! (\*/▽\*)+｡"); break;
          case 9: message.channel.send ("Re:vale is mature, TRIGGER is erotic, and IDOLiSH7 is cute! lol"); break;
          case 10: message.channel.send ("Ah, I gotta apologize to Tamaki  later for eating his puddings that one time. (\*‘ω’\*)"); break;
          case 11: message.channel.send ("Anyone will get depressed if they're treated like nothing but extras. Even me."); break;
          case 12: message.channel.send ("You're fun to message as always, lol. Sorry if you're busy right now..."); break;
          case 13: message.channel.send ("Ryuu and I are workout buddies! \(○`・v・)人(・v・´●)ﾉ\nAnd since both Ryuu and Mitsuki are great cooks, it's fune to barbecue with them! I don't have to lift a finger!"); break;
          case 14: message.channel.send ("My type?\nLet’s see~, someone with long hair and manicured blue nails, who’s a great cook and bad with mornings, so I feel like I have to always be there for them...\nAh, also it’d be nice if they had a streak in their hair~."); break;
          case 15: message.channel.send ("Not being able to stand by Yuki has always been my greatest fear.\nBut a certain incident convinced me that the future I'm fearing won't come, so now I believe I'll be able to overcome any hardships along my way.\nBecause no matter how painful the future is, it won't be as bad as what I feared."); break;
          case 16: message.channel.send ("Practice makes perfect~!"); break;
          case 17: message.channel.send ("I have to pretend I'm a real senpai by helping out the young ones sometimes."); break;
          case 18: message.channel.send ("I had felt like my dreams were never gonna come true. But the moment I heard that song, all of my frustration and sadness were swept away. \nLike I had gotten washed clean by the waves."); break;
          case 19: message.channel.send ("On my off days, I exercise! I also eat yummy food!! Laughing and taking deep breaths before bed helps you relax naturally so I recommend that too! \nBut ny number one way is seeing my partner's smile! It melts away all my fatigue!"); break;
          case 20: message.channel.send ("What I like about myself is that I've got guts and stamina!\nThough I guess you could also that I'm too persistent..."); break;
          case 21: message.channel.send ("I'm not letting you go home tonight..."); break;
          case 22: message.channel.send ("I shined brighter and brighter so I wouldn't be outshined by the light I reached for. Before I realized it, that light became my own. That light is now shining the way for someone else."); break;
          case 23: message.channel.send ("Good work everyday, Maneko-chan! Thanks for making our everyday inspiring and happy! Here, I'll give you this Momorin with limited edition wrapper!"); break;
          case 24: message.channel.send ("If I'm being honest, I think everyone's an unsung hero in their own right. They all live and do things in their own way. And just by doing that, they make the world go 'round.\n But if we're not valued, we'll forget  that, and make mistakes. So, what we're really doing is just reminding all those people of the fact they're heroes."); break;
          case 25: message.channel.send ("I have nothing to be afraid of, everyday is the happiest!"); break;
       }
     }



       if (msg.startsWith (prefix + "cat")) {
         return message.channel.send ({files:["./images/nya.png"]});
       }

       if (msg.startsWith ("i can't believe ryo is dead")) {
         return message.channel.send("Finally.");
       }

       if (msg.startsWith ("good morning momo")) {
         return message.channel.send("Morning! I'll go my best today!");
       }

       if (msg.startsWith ("good night momo")) {
         return message.channel.send("Good night! Being a night owl is the natural enemy of your skin!");
       }

       if(cmd ===`${prefix}help`){
         let helpembed = new Discord.RichEmbed()
         .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
         .setColor("#fe00b6")
         .addField("Commands:","**m!momo** *<question>* | Ask him anything. \n**m!send** *<@user> <message>* | Send a DM to the mentioned user\n**m!scout** | Solo Yolo \n**m!quote** | Random quote\n**m!say** *<message>* | Have the bot say anything you want\n**m!help** | Displays this help message")
         .addField("Basic m!commands:", "mafia (alias:maf) || ryo || kaomoji || mofu")
         .addField("Command phrases:", "I can't believe Ryo is dead || Hey gays || Good morning Momo || Good night Momo")
         return botschannel.send(helpembed);
       }

        if(cmd === `${prefix}say`){
           let botmessage = args.join(" ");
           message.delete().catch();
           return message.channel.send(botmessage);
       }

       if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
         return message.channel.send("maf maf");
       }

       if(cmd === `${prefix}ryo`){
         return message.channel.send("Oh fuck. Bastard spotted.");
       }

     if(msg.startsWith (prefix + "kaomoji")) {
         number = 28;
         var random = Math.floor (Math.random() * (number)) + 1;
         switch (random) {
           case 1: message.channel.send ("╰(｀・ω・)╮  −−＝＝≡≡≡🍜"); break;
           case 2: message.channel.send ("・*・:≡(  ϵ:)"); break;
           case 3: message.channel.send ("ε===(っ≧ω≦)っ"); break;
           case 4: message.channel.send ("(￣o￣) zzZZzzZZ"); break;
           case 5: message.channel.send ("o(^^o)(o^^o)(o^^o)(o^^)o"); break;
           case 6: message.channel.send ("( ´-ω･)︻┻┳══━一"); break;
           case 7: message.channel.send ("(ФωФ)"); break;
           case 8: message.channel.send ("♪ ~ ( ´ ϵ ` )"); break;
           case 9: message.channel.send ("\\・:三(　ϵ:))((:3　)三:・。"); break
           case 10: message.channel.send ("(ﾉ≧∀≦)ﾉ・‥⋯—★ beam!"); break;
           case 11: message.channel.send ("o(≧▽≦o)(o≧▽≦)o"); break;
           case 12: message.channel.send ("peeks |ω ・)"); break;
           case 13: message.channel.send ("*flash!* Σ p[【 Ｏ 】]qゝω •*)"); break;
           case 14: message.channel.send ("゜+。:.゜\(*´∀`)ﾉ゜.:。+゜"); break;
           case 15: message.channel.send ("+゜o(>Д<。*)ﾉ°+"); break;
           case 16: message.channel.send ("゜+。:.゜\(*´∀`)ﾉ゜.:。+゜"); break;
           case 17: message.channel.send ("( ¯ ⌓ ¯ ;)"); break;
           case 18: message.channel.send ("(ﾉ>ω<)ﾉ :｡･::･ﾟ’★,｡･:*:･ﾟ’☆"); break
           case 19: message.channel.send ("(∩` ﾛ ´)⊃━炎炎炎炎炎"); break;
           case 20: message.channel.send ("(ﾒ￣▽￣)︻┳═一"); break;
           case 21: message.channel.send ("(҂` ﾛ ´)︻デ═一 ＼(º □ º l|l)/"); break;
           case 22: message.channel.send ("ヾ(・ω・)メ(・ω・)ノ"); break;
           case 23: message.channel.send ("／(・ᆺ・)＼"); break;
           case 24: message.channel.send ("┬┴┬┴┤(･_├┬┴┬┴"); break;
           case 25: message.channel.send ("	ヽ(o＾▽＾o)ノ"); break;
           case 26: message.channel.send ("°.+:｡ドキ((((o • ω •)o)))ドキ°.+:｡♪"); break;
           case 27: message.channel.send (" ⊂((〃￣-￣〃))⊃"); break;
           case 28: message.channel.send ("\(*´3`*)丿"); break;
        }
      }


});

bot.login(process.env.token);
