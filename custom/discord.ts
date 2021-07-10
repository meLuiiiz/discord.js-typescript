import { Client, Message, Collection } from 'discord.js'

export interface Command {
    name: string,
    description?: string,
    aliases?: Array<string>,
    execute: (Client: Client, message: Message, args: string[]) => any
}

class CustomClient extends Client {
    commands: Collection<unknown, Command>;

    constructor() {
        super()
        this.commands = new Collection()
    }
}

export { CustomClient }