const mongoose = require('mongoose')
const especialidadSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Por favor teclea el nombre de la especialidad']
    }
})

module.exports = mongoose.model('Especialidad', especialidadSchema)