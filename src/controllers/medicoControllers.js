const asyncHandler = require('express-async-handler')
const Medico = require('../models/medicoModel.js')

const getMedicos = asyncHandler(async(req,res)=>{
    const medicos = await Medico.find()
    res.status(200).json(medicos)
})

const createMedico = asyncHandler(async(req,res)=>{
    const {email,password,nombre,especialidad,cedula,estudios,ubicacion} = req.body
    if(!email || !password || !nombre || !especialidad || !cedula || !estudios || !ubicacion){
        res.status(400)
        throw new Error('faltan datos')
    }
    const EmailExists = await Medico.findOne({email})
    if(EmailExists){
        res.status(400)
        throw new Error('el usuario ya existe')
    }
    const CedulaExists = await Medico.findOne({cedula})
    if(CedulaExists){
        res.status(400)
        throw new Error('el usuario ya existe')
    }

    const medico = await Medico.create({
        email,
        password,
        nombre,
        especialidad,
        cedula,
        estudios,
        ubicacion
    })
    if(medico){
        res.status(201).json({
            _id: medico.id,
            email: medico.email,
            nombre: medico.nombre,
            especialidad: medico.especialidad,
            cedula: medico.cedula,
            estudios: medico.estudios,
            ubicacion: medico.ubicacion
        })
    } else{
        res.status(400)
        throw new Error('Datos no validos')
    }
})

const updateMedico = asyncHandler(async(req,res)=>{
    const medico = await Medico.findById(req.params.id)
    if(!medico){
        res.status(400)
        throw new Error('el medico no fue encontrado')
    }
    const medicoUpdated = await Medico.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(medicoUpdated)
})

const deleteMedico = asyncHandler(async(req,res)=>{
    const medico = await Medico.findById(req.params.id)
    if(!medico){
        res.status(400)
        throw new Error('el medico no fue encontrado')
    }
    await medico.deleteOne()
    res.status(200).json({id:req.params.id})
})
module.exports = {
    getMedicos,
    createMedico,
    updateMedico,
    deleteMedico
}