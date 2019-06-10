const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");



bot.on('ready', () => {//playing status
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'over u',
            type: "WATCHING",
            url: "https://www.twitch.tv/cheeseontwitch"
        }
    });
});
bot.login(process.env.BOT_TOKEN).catch(console.error);
bot.on('ready', () => {
  console.log('im on nigga');
});

//automatically deletes the users messages and outputs to terminal
{
bot.on('message', message =>
{
	if(message.author.id ==='112595418428231680')
{
    console.log(message.content)
		message.delete()
	}
});
}

//no n word allowed
bot.on('message', message => {
  if(message.member.roles.find(r => r.name === "black") || message.member.roles.find(r => r.name === "nigger")){
  } else if(message.member.roles.find(r => r.name === "timeout") || message.member.roles.find(r => r.name === "muted")){}
  else{
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    
    message.delete()
    message.reply ('you cant say the n word')
    .then (msg => {
    msg.delete(3000)
  });
}
  }
});

bot.on('message', message => {
  if (message.author.bot) {
    return false;
} {
  if(message.content.includes("⛓")){
    message.delete()
    message.author.send(message.content)
    .then (msg => {
      msg.delete(10000)
    });
  }
  }
});



bot.on('message', message =>
{
   if(message.author.id ==='145220382012604416'){return false;}
   else if(message.member.roles.find(r => r.name === "timeout") || message.member.roles.find(r => r.name === "muted")){
	{
    console.log(message.content)
		message.delete()
	}
}});






bot.on('message', message => {
  if(config.tummy.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
}
  }
);





bot.on('message', message =>
{
   if(message.member.roles.find(r => r.name === "timeout")){return false;}
   else if(message.isMentioned(bot.user)){
	{
    message.delete()
    message.reply('dont @ me')
    .then (msg => {
      msg.delete(3000)
    });
	}
}});


bot.on('message', message => {
  if (message.author.bot) {
    return false;
} {
  if(message.content.includes("👮")){
    message.delete()
    message.author.send(message.content)
    .then (msg => {
      msg.delete(10000)
    });
  }
  }
});
