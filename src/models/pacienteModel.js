const mongoose = require('mongoose')
const bcrypt =  require("bcryptjs")

const pacienteSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  paterno: {
    type: String,
  },
  materno: {
    type: String,
  },
  nombre:{
    type:String
  },
  edad: {
    type: Number,
  },
  peso: {
    type: Number,
  },
  sexo: {
    ref: "Sexo",
    type: mongoose.Schema.Types.ObjectId,
  },
  ubicacion: {
    type: String,
  },
  telefono:{
    type:String
  },
  alergias:{
    type:String
  },
  medicamentos:{
    type:String
  },
  tipoSangre:{
    type:String
  },
  padeceEnfermedad:{
    type:String
  },
  donadorOrganos:{
    type:Boolean
  },
  confirmado:{
    type:Boolean
  }
},
{
    timestamps:true,
    versionKey:false
});

pacienteSchema.statics.encryptPassword = async (password)=> {
    const salt = await bcrypt.genSalt(10)
    
    const encryptedPass = await bcrypt.hash(password, salt)
    
    return encryptedPass
}

pacienteSchema.statics.comparePassword = async (password,receivedPassword)=> {
    return await bcrypt.compare(password,receivedPassword)
}

//export default model('Paciente',pacienteSchema)
module.exports = mongoose.model('Paciente', pacienteSchema)