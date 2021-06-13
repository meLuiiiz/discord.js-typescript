import { ConfigApp, ConfigTheme } from "../src/Interface/Config"

export const app: ConfigApp = {
    name: process.env.DISCORD_APP_NAME,
    prefix: process.env.DISCORD_APP_PREFIX
}

export const theme: ConfigTheme = {
    colors: {
        default: '#202225',
        success: '#57F287',
        error: '#ED4245',
        warn: '#FEE75C',
        info: '#0284C7',
    }
}