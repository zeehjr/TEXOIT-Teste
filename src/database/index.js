import path from 'path'
import { createDatabaseFromCSV } from './databaseHelpers'

const CSV_FILE_PATH = path.resolve(__dirname, 'movielist.csv')

const database = createDatabaseFromCSV(CSV_FILE_PATH)

export default database
