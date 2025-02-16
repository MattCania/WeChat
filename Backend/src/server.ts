import 'dotenv/config'
import express from 'express'
import "./database/connection"

const app = express()

console.log(process.env.DB_USER)

app.listen(process.env.PORT, () => console.log ("Successful Port Connection"));