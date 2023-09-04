
const { ActivityType } = require("discord.js"); // Discord.js V14
function status(client, noblox, currentUser) {
    const prefix = process.env.PREFIX;
    client.once("ready", () => {
        console.log(
            new Date(),
            `| status.js | I'm in! Username: ${client.user.username}. User ID: ${client.user.id}`
        );
        //client.user.setActivity('\"' + prefix + '\"', {type: "LISTENING"});
        const activities = [
            `Logged in on Roblox as ${currentUser.UserName} [${currentUser.UserID}]`,
            `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} members!`,
            `${client.guilds.cache.size} servers!`,
        ];

        let i = 0;
        //setInterval(() => client.user.setActivity(process.env.PREFIX + `help | ${activities[i++ % activities.length]}`, { type: 'LISTENING' }), 15000); -- Discord.js V12
        setInterval(
            () =>
                client.user.setPresence({
                    activities: [
                        {
                            name: `/help & s>help | ${activities[i++ % activities.length]}`,
                            type: ActivityType.Listening,
                        },
                    ],
                    status: "online",
                }),
            15000
        ); // -- Discord.js V14
    });
}

module.exports = status;