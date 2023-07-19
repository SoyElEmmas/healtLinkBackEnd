const Paciente = require("../models/pacienteModel")
const Sexo = require("../models/sexoModel")

const checkDuplicateUsernameOrEmail = async (req,res,next) => {
    
    const paciente = await Paciente.findOne({email:req.body.email})
    if (paciente) return res.status(401).json({message:'The paciente already exists'})

    const email = await Paciente.findOne({email:req.body.email})
    if (email) return res.status(401).json({message:'The email already exists'})

    next();
}

module.exports =  {checkDuplicateUsernameOrEmail}