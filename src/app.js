import express from 'express'
import routes from './routes'
import database from './database'

const app = express()

app.use(routes)

export default app
