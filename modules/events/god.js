module.exports.config = {
	name: "god",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Record bot activity notifications!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "☆ 𝙲𝚑𝚞𝚐𝚕𝚒 𝚃𝚒𝚖𝚎 ☆" +
                        "\n\n»  𝘎𝘳𝘰𝘶𝘱 𝘐𝘋: " + event.threadID +
                        "\n» 𝘈𝘤𝘵𝘪𝘰𝘯: {task}" +
                        "\n» 𝘜𝘴𝘬𝘢 𝘜𝘐𝘋  : " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "𝘗𝘶𝘳𝘢𝘯𝘢 𝘵𝘰 𝘣𝘩𝘰𝘰𝘭 𝘨𝘢𝘺𝘪",
                    newName = event.logMessageData.name || "𝐘𝐚𝐚𝐝 𝐍𝐚𝐡𝐢";
            task = "𝘌𝘬 𝘎𝘳𝘰𝘶𝘱 𝘬𝘢 𝘯𝘢𝘢𝘮 𝘤𝘩𝘢𝘯𝘨𝘦 𝘬𝘪𝘺𝘢 𝘨𝘢𝘺𝘢 𝘩𝘢𝘪: '" + oldName + "' 𝘭𝘦𝘬𝘪𝘯 𝘯𝘢𝘺𝘢 𝘯𝘢𝘢𝘮😴 '" + newName + "' 𝘺𝘦 hai";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "𝘔𝘶𝘫𝘩𝘦 𝘬𝘪𝘴𝘪 𝘯𝘦 𝘯𝘦𝘸 𝘎𝘳𝘰𝘶𝘱 𝘮𝘦 𝘈𝘥𝘥 𝘬𝘪𝘺𝘢";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "𝐃𝐞𝐤𝐡𝐨 𝐛𝐚𝐛𝐮 𝐈𝐬𝐧𝐞 𝐦𝐮𝐣𝐡𝐞 𝐧𝐢𝐤𝐚𝐚𝐥 𝐝𝐢𝐲𝐚😭!"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = "100040426712109";

    return api.sendMessage(formReport, god, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}
