const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client
const token = process.env.token;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
 member.send(`Welcome to the Power Star Frenzy Discord Server! Make sure to read the rules.`);
  //bot.channels.get('164998423014014976').sendMessage('ayy lmao welcome to this totally lit :fire: mario fangame server :joy: :ok_hand: be sure to read the rules :sweat_drops: :weary:');
});


client.on('message', msg => {


  if(msg.author.bot) return;
  badWords = ["fag", "nigga", "faggot", "nigger", "retard", "retarded", "mirby"]
  pics = ["adam","benstar","brady","fechdog","gatete","itssilverscout","jonah","kaiserlucas","kenykern","mariokirby","nick","noivern","gateteban","nyaa"]
  sms = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]

  let prefix = "-"

  cont = msg.content
  let argsNormie = msg.content.split(" ").slice(1);

  msg.content = msg.content.toLowerCase();
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
  let message = msg



  for(var x = 0; x < badWords.length; x++){
    if(msg.content.includes(badWords[x])){
      msg.delete()
      msg.reply("Your message contains a word prohibited from use in this server and has been deleted. Please review #rules-info-links").then(m => {
        m.delete(2500)
      })
      return
    }
  }

 /* if(message.content.includes("anime")){

     message.reply("haha anime lol :joy: jake paul is better :fire: GET BURNED :fire:").then(m => {
                m.delete(2500)
     })
     }
  */
  
    if(command === "send"){
      
        if(message.member.hasPermission("MANAGE_ROLES") == false && !message.member.roles.has("455072607054725150")){
          console.log("send command permission denied. (" + message.author.username + ")").
          
          return
        }
        else{
            console.log("send command permission check passed. (" + message.author.username + ")")
        }
        for(var i = 0; i < argsNormie.length; i=i+1){
            if(argsNormie[i].charAt(0) === "!"){
                argsNormie[i] = "@"+argsNormie[i].slice(1)
            }

        }
        msg.delete()
        msg.channel.send(argsNormie.join(" "))

 }
/*  if(pics.includes(args[0])){
    console.log("test")
    argsNormie = argsNormie.slice(1);
    msg.channel.send(argsNormie.join(" "), {files: ["./images/"+args[0]+".png"]})
  }
  else if(args[0] == "sms"){
    var quote = sms[Math.floor(Math.random()*sms.length)];
    msg.channel.send(argsNormie.slice(1).join(" "), {files: ["./images/sms/"+quote+".png"]})
  }
  else{
    msg.channel.send(argsNormie.join(" "))
  }
})
*/
});
/*
    client.login(process.env.BOT_TOKEN);
*/
client.login(token).catch(err => console.log(err));