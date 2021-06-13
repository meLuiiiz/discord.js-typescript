import { MessageEmbed } from 'discord.js'
import { EmbedSimple } from '../Interface/Helper'

export const embed = {

    simple: ({ color, title, description, footer = false, image = false, avatar = false }: EmbedSimple) => {
        const embed = new MessageEmbed()
                .setColor(color)
        if (title) embed.setTitle(title)
        if (description) embed.setDescription(description)
        if (footer) embed.setFooter(footer, avatar ? avatar : '')
        if (image) embed.setImage(image)

        return embed
    }

}
