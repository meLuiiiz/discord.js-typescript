import { Message } from "discord.js";

declare module "discord.js" {
    export interface Client {
        commands: Collection<unknown, Command>
    }

    export interface Command {
        name: string,
        description?: string,
        aliases?: Array,
        execute: (Client: Client, message: Message, args: string[]) => any
    }
}