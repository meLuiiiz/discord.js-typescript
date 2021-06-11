import { createConnection } from 'typeorm'
import db from '../config/database'

createConnection(db).then(() => {
    console.log('\n📦 Successfully connected with database!')
})