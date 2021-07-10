import { config } from 'dotenv'
import { Message } from 'discord.js'
import { CustomClient } from './custom/discord'
import fs from 'fs'

config()
import './database/start'

import { app } from './config/app'
const { name, prefix } = app

const client: CustomClient = new CustomClient()

const commandFiles = fs.readdirSync('./src/Commands').filter(file => file.endsWith('.js') || file.endsWith('.ts'));
for (const file of commandFiles) {
    const command = require(`./src/Commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', async () => {
    console.log(`\n${name} was initialized\n`)
    console.log(`- with ${client.users.cache.size} users`)
    console.log(`- on ${client.guilds.cache.size} servers`)
    console.log(`\n${name} is ready 🎉🎉🎉\n`)
})

client.on('message', async (message: Message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift()?.toLowerCase()

	try {
		const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
        if (!command) return
        
        command?.execute(client, message, args)
	} catch (error) {
		console.error(error);
    }
})

client.login(process.env.DISCORD_TOKEN)