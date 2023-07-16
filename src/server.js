//aqui se configura el server
const express = require('express');
const cors = require('cors')
const connectDB = require('./database.js')
const port = process.env.PORT || 5001
connectDB()
//inicia el server
const app = express();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))




app.use('/medicos',require('./routes/medicoRoutes.js'))

app.listen(port,()=>console.log(`Escuchando en puerto ${port}`))
