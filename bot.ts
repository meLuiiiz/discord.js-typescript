import { config } from 'dotenv'
import { Client, Collection, Message } from 'discord.js'
import fs from 'fs'

config()
import './database/start'

import { app } from './config/app'
const { name, prefix } = app

const client: Client = new Client()
client.commands = new Collection();

const commandFiles = fs.readdirSync('./src/Commands').filter(file => file.endsWith('.js'));
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
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice('!'.length).trim().split(/ +/);
    const command = args.shift()?.toLowerCase()

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command)?.execute(message, args);
	} catch (error) {
		console.error(error);
    }
})

client.login(process.env.DISCORD_TOKEN)