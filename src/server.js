//aqui se configura el server
const express = require('express');
const cors = require('cors')
const connectDB = require('./database.js')
const createSexo = require('./libs/initialSetup.js')
const pacienteRoutes = require('./routes/pacienteRoutes.js')
const port = process.env.PORT || 5001
connectDB()
//inicia el server
const app = express();

//pobla la tabla sexo
createSexo()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))




app.use('/medicos',require('./routes/medicoRoutes.js'))
app.use('/paciente',pacienteRoutes)

app.listen(port,()=>console.log(`Escuchando en puerto ${port}`))
