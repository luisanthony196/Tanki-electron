import Database from 'better-sqlite3'
import { app } from 'electron'
import path from 'path'

const db = new Database(path.join(app.getPath('appData'), 'tanki', 'personal.db'))
db.pragma('journal_mode = WAL')

export const getConnection = () => db
