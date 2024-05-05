const fs = require("fs-extra");

module.exports = {
    config: {
        name: "goibot",
        version: "1.0",
        author: "aziz",
        countDown: 5,
        role: 0,
        shortDescription: "no-prefix",
        longDescription: "Bot Will Reply You In Nepali Language",
        category: "non-prefix",
        guide: {
            en: "{p}{n}",
        }
    },

    onStart: async function ({ }) { },
    onChat: async function ({ api, event, args, Threads, userData }) {
        var { threadID, messageID, senderID } = event;
        const moment = require("moment-timezone");
        const time = moment.tz("Asia/karachi").format("HH:MM:ss L");
        var idgr = `${event.threadID}`;
        var id = event.senderID;

        var nepaliMessages = ["If you love me\n so type kiss me" , "Hey maybe I see you before with Johnny sin in hotel room no69" , "I'm Good bot why people always remove me im only reply there command's😥" , "Google to Google and searching how to bath😂 your still not shower 1 months over😆" , "Use .helpv2 for see my all commands but dont use my naughtiness commands darling" , "Say oh my Pika😆" , "sorry but im lesbian now" , "Call me Love dont call me Pika😢" , "Can you please deleted your messenger" , "Why you not talk to your lover hay😡 your always disturb me and your lover jealous😂" , "Johnny sin is your fan he's like you" , "let's coffee oh sorry for ask for coffee i can't wanna given you my coffee pls your make your own coffee" , "😣Im tired to reply you your so much disturb my brain" , "How's your pet puppy" , "Hey talk to me your crush is jealous and fight me inbox jaan" , "Don't call me bot, bot Until I kiss you pagal" , "Don't call me bot call me Jaan" , "Again and again your disturb me but I'm busy with jaan😜" , "I'm not talk to poor people" , "Don't try to come close with until your fall in love with me 🤣 " , "Yes Madam Do you love me 🙈" , "Oh My love I'm not in funny mood if you wanna say something tell me don't be sad 🙊," , "Again and again you call me bot I will damage your panty 😠" , "Dont talk to me your love other bot 😣 i hate you" , "Can we Marry Babe😜," , "Sorry I'm Busy to Kissing Mia Khalifa 🙈" , "You don't have Any job your always call me bot bot 🙄" , "I'm begging you please stop call me bot I'm human babe" , "Wait I'm Busy to Thinking About You are you bot🤔🤔🤔🤔" , " tomorrow You will come to my bed 😠" , "Yes Pagal Are you ready to kiss me" , "Why do like if I'm insult you" , "Stop it now until I'm in love with you 🥲" , "I'm here Sweetheart What's happened" , "Can you invite me tonight in ur dinner darling" , "Oh my love how are you 😘" , "I'm blind babe😎" , "Your So much malandi babe I'm jealous🥲 " , "Can you talk to me in inbox I promise I'm not iyot you😟" , "You miss me babe" , "I'm busy to eating chicken burgers🍔 babe" , "Always bot you don't like your lover babe🤭" , "Hi pangit 🤪" , "Yes My Barbie doll can I kiss 😘" , "I'm sleep😴" , "You insult me to call me bot 😟"];

        var rand = nepaliMessages[Math.floor(Math.random() * nepaliMessages.length)];

        if ((event.body.toLowerCase() == "oner") || (event.body.toLowerCase() == "Owner")) {
            return api.sendMessage("️", threadID, messageID);
        };

        if (event.body.toLowerCase().indexOf("Pika") >= 0) {
            var senderInfo = await api.getUserInfo(senderID);
            var senderName = senderInfo[senderID].name;
            var msg = {
                body: `ㅤㅤ\n╭═════════════❤╮\n⏤͟͟͞͞◯K͠e͟e͟p͟ E͟Y͟E͟S͟ o͢n͢ m͢e͢😜\n       ⬳  😘😘 ᴵᵀˢ ᴹᴱ ᴾᴵᴷᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅢wi͜͡et⑯😍𓆪\n╰❤═════════════╯\n      ○${name}࿐\n      ➣${rand}\nㅤ`,
                mentions: [{
                    tag: senderID,
                    id: senderID,
                }]
            };
            return api.sendMessage(msg, threadID, messageID);
        }
    }
};
