const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()
const Paciente = require("../models/pacienteModel");
const JWT_SECRET = process.env.JWT_SECRET

const verifyToken = async (req, res, next) => {
    try {
      const token = req.headers["token"];

      if (!token) return res.status(403).json({ message: "No token provided" });
  
      const decoded = jwt.verify(token, JWT_SECRET);

      //se extrae el id y se guarda en el request
      req.idPaciente = decoded.id;
  
      const paciente = await Paciente.findById(req.idPaciente, { password: 0 });
  
      if (!paciente) return res.status(404).json({ message: "paciente no encontrado" });
      next();
    } catch (error) {
      console.error(error); 
      return res.status(401).json({message:'unauthorized'})
    }
  }

  module.exports =  {verifyToken}