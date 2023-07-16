const asyncHandler = require('express-async-handler')
const Medico = require('../models/medicoModel.js')

const getMedicos = asyncHandler(async(req,res)=>{
    const medicos = await Medico.find()
    res.status(200).json(medicos)
})

module.exports = {
    getMedicos
}