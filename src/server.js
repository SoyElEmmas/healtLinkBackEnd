//aqui se configura el server
import expres from "express";
import pkg from "../package.json" assert { type: "json" };;
import express from "express";
import cors from 'cors'

//inicia el server
const app = expres();

app.set("pkg", pkg);
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => { //trae la info del package.json
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use('/',() => {})

export default app;
