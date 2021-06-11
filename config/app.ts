import { ConfigApp } from "../src/Interface/Config"

export const app: ConfigApp = {
    name: process.env.DISCORD_APP_NAME,
    prefix: process.env.DISCORD_APP_PREFIX
}

export const theme = {}