module.exports = {
	name: "user",
	description: "Userinfo..",
	aliases: ["userinfo", "whois"],
	execute(message, args) {
		const embedAA = {
			author: {
				name: message.client.user.username,
				icon_url: message.client.user.displayAvatarURL({
					format: "png",
					dynamic: true,
				}),
			},
			footer: {
				text: message.guild.name,
				icon_url: message.guild.iconURL({
					format: "png",
					dynamic: true,
				}),
			},
			description: `Your username: ${message.author.username}\nYour ID: ${message.author.id}`,
			timestamp: new Date(),
		};
		return message.channel.send({ embeds: [embedAA] });
	},
};
