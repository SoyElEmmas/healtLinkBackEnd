//import { Schema, model } from "mongoose";
const mongoose = require('mongoose');

const sexoSchema = new mongoose.Schema(
    {
    sexo: String
},
{
    versionKey:false
}
);

module.exports = mongoose.model('Sexo', sexoSchema)