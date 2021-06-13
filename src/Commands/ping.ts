import { Message, Client } from "discord.js";
import { theme } from "../../config/app";
import { embed } from "../Helpers/embed";

const execute = async (client: Client, message: Message, args: String[]) => {
    message.channel.send(`<@${message.author.id}>`).then((content) => {
        const ping = content.createdTimestamp - message.createdTimestamp
        content.edit(embed.simple({
            color: theme.colors.info,
            description: `

                **Sua latência**
                ${Math.round(ping)}ms

                **Latência do servidor**
                ${Math.round(client.ws.ping)}ms
            `
        }))
    })
}

module.exports = {
    name: 'ping',
    aliases: [ 'pong' ],
    execute
}