const mongoose = require('mongoose')
const medicoSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Por favor teclea tu email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Por favor teclea tu password']
    },
    nombre:{
        type: String,
        required: [true, 'Por favor teclea tu nombre']
    },
    especialidad: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Especialidad'
    },
    cedula:{
        type: Number,
        required: [true, 'Por favor teclea tu cedula profesional'],
        unique: true
    },
    estudios:{
        type: String,
        required: [true, 'Por favor teclea tu lugar de estudios']
    },
    ubicacion:{
        type: String,
        required: [true, 'Por favor teclea tu ubicacion']
    },
})
module.exports = mongoose.model('Medico', medicoSchema)