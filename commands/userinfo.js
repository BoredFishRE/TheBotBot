const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "userinfo",
  description: "Info about the user.",
  execute(message, args, client) {
    let embed = new MessageEmbed()
      .setColor("#42f2f5")
      .setThumbnail(message.author.displayAvatarURL({ format: "gif", dynamic: "true" }))
      .setTitle("Userinfo of " + message.author.username)
      .setFooter(
        "Requested by " + message.author.username,
        message.author.displayAvatarURL({ format: "gif", dynamic: "true"})
      )
      .addField("User created at?", message.author.createdAt)
      .addField("User Tag", message.author.tag)
      .addField("User's Last message sent", message.author.lastMessage)
      .addField("User ID", message.author.id)
      .addField("User Bot?", message.author.bot)
      .addField("User joined at?", message.guild.joinedAt);
    message.channel.send(embed);
  },
};
