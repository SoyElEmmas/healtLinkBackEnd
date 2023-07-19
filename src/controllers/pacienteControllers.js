//import Paciente from "../models/pacienteModel";
//import Sexo from "../models/sexoModel"
//import jwt from "jsonwebtoken";
//import dotenv from "dotenv"

const Paciente = require("../models/pacienteModel")
const Sexo = require("../models/sexoModel")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()

//dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

const signUp = async (req, res) => {
    const { email, password, paterno, materno, nombres, edad, 
            peso, sexo, ubicacion, telefono, alergias, medicamentos,
            tipoSangre, padeceEnfermedad, donadorOrganos, confirmado
          } = req.body;
  
    //valida si existe el paciente
    const pacienteFound = await Paciente.findOne({ email: email });
  
    //si existe, ya no continua
    if (pacienteFound) return res.status(404).json({ message: "el paciente ya existe!" });
  
    //encripta el pass
    const encryptedPass = await Paciente.encryptPassword(password);
  
    //crea un nuevo usuario
    const newPaciente = new Paciente({
      email: email,
      password: encryptedPass, //User.encryptPassword(password)
      paterno: paterno,
      materno: materno,
      nombres: nombres,
      edad: edad,
      peso: peso,
      //sexo: sexo,
      ubicacion: ubicacion,
      telefono: telefono,
      alergias: alergias,
      medicamentos: medicamentos,
      tipoSangre: tipoSangre,
      padeceEnfermedad: padeceEnfermedad,
      donadorOrganos: donadorOrganos,
      confirmado: confirmado
    })
  
    console.log("sexo a buscar "+ sexo)
    const foundSexoPaciente = await Sexo.findOne({sexo:sexo})
    console.log("foundSexoPaciente "+foundSexoPaciente);

    newPaciente.sexo = foundSexoPaciente._id
    
    //guarda el nuevo usuario
    const pacienteSaved = await newPaciente.save();
    
    //genera un token
    const token = jwt.sign({id:pacienteSaved._id}, JWT_SECRET, {
      expiresIn: 1200, // 20 mins
    });
  
    //responde con el usuario y el token
    res.status(200).json({
      token: token,
    });
  };
  
  const signIn = async (req, res) => {
  
    const { email, password} = req.body;
  
    //valida si existe el usuario
    const pacienteFound = await Paciente.findOne({ email: email });
  
    //si no existe, ya no continua
    if (!pacienteFound) return res.status(400).json({ message: "paciente no existe!" });
  
    const matchPassword = await Paciente.comparePassword(password,pacienteFound.password)
  
    if (!matchPassword) return res.status(401).json({token:null,message:'invalid password'})
  
    console.log(`pacienteFound: ${pacienteFound}`);
  
    //genera un token
    const token = jwt.sign({id:pacienteFound._id}, JWT_SECRET, {
      expiresIn: 1200, // 20 mins
    });
  
    res.json({"token":token});
  };
  
  module.exports = {signUp,signIn} 