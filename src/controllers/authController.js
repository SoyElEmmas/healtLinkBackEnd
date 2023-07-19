import Medico from "../models/medicoModel";
import Paciente from '../models/pacienteModel'

import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

export const signUp = async (req, res) => {
    //const {email, }
}