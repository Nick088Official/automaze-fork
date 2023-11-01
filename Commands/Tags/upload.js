module.exports = {
    name: 'upload',
    category: 'Tags',
    description: 'How to upload to `huggingface.co`',
    aliases: ['huggingface', 'hf'],
    syntax: `upload [member]`,
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {string[]} args 
     * @param {String} prefix 
     */
    run: (client, message, args, prefix) => {
        const embedData = client.botData.embeds.upload;
        const embedColor = client.botConfigs.colors.theme.primary;
        const embed = client.botUtils.createEmbed(embedData, embedColor);

        if (message.mentions.members.first()) {
            return message.channel.send({content: `*Suggestion for ${message.mentions.members.first()}*`, embeds: [embed]});
        }

        message.channel.send({embeds: [embed]});
    }
}
