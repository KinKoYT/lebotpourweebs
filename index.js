const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require ("./token.json")

bot.on('ready', async () =>{
    console.log("Le bot Fonctionne")
    bot.user.setActivity("?help") 
    setTimeout(() => {
    bot.user.setStatus("dnd");
    }, 100)
})

bot.on("guildMemberAdd", member => {
    member.send("Bienvenu sur ωєєвѕ! fais ?help si tu a besoin d'aide")
    bot.channels.cache.get("799330869575680001").send(`Ohayo ${member} tu te trouve sur ωєєвѕ !`);
    member.roles.add("799353062677413929")
    


})

bot.on("message", message => {

    if(message.content.startsWith("?clear")){
    message.delete();
        if(message.member.hasPermission("MANAGE_MESSAGES")){

            let args = message.content.trim().split(/ +/g);

            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99 ){

                    message.channel.bulkDelete(args[1]) 
                    message.channel.send(`Vous avez Purifié le server en supprimant ${args[1]} message(s) !`)

                   
                }else{
                    message.channel.send("Vous ne pouvez purifié qu'un maximum de 99 messages !");
                }
            }else{
                message.channel.send("Vous devez rentrer un nombre d'un minimum de 99 pour pouvoir purifié ce channel !")
            }       
        }else{
            message.channel.send("Tu est un imposteur, il faut avoir les permissions pour pouvoirs purifié ce channel")
        }
    }
})



bot.login(process.env.BOT_TOKEN);