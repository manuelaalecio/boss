module.exports = {
  name: "play",
  aliases: ["p"],
  run: async (client, message, args) => {
    const string = args.join(" ");
    if (!string)
      return message.channel.send(
        `${client.emotes.error} | Please enter a song url or query to search.`
      );
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message,
    });
  },
};
