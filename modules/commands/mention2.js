module.exports.config = {
  name: "mention-bot",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "Arun",
  description: "Bot ko.mention karne pe ,bot reply dega ",
  commandCategory: "system",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100094729435307") {
    var aid = ["61551421059261" , "100094729435307" , "61551225242006" , "61557135887844"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Me Jaanu Ke Sath Busy hu , Mujhe kyu bula rahe ho" , "Abe Me bot hu mujhe mention mat kar" , "Dimag Mat khao" , "Kya hua janu mujhe bulaya🙂" , "Koi kaam ni hai kya tujhe" , "Bolo na babu" , "Meri yaad arahi tumhe itni" , "Ha meri jan😙" , "Mujhe mt bulya kro🙄" , "Tera sar f0d dena me , baar mention mt kro😒" , "Ek Bar Me smjh ni ata tujhe kya meri baat ,mujhe baar bar mention krrhe ho😒😒😒😒" , "Abee jaa na 😒" , "Mujhe Bulaya😘kya" , "Me bot hu baby , mention mat karo" , "haye mujhe sharam arhi hai " , "haye mera janu, mujhe yaad kiya " , "sorry i have a boyfriend🙈" ];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
