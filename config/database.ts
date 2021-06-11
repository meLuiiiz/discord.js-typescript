import { config } from 'dotenv'
import { Database } from "../src/Interface/Database"

config()

const database: Database = {
    type: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
}

export default database