//este archivo arranca la aplicación

import app from './server.js'
import connectDB from './database.js'
import dotenv from "dotenv"
import database from './database.js'

const port = process.env.port || 5000

app.listen(port)
console.log("server listening on port", port);

connectDB();