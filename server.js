// Carregando packages
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require("mongoose");
const request = require("request");
const bodyParser = require("body-parser");
//const cors = require("cors");
const http = require("http");
const rotas = require("./rotas/rotas");

// Definindo porta padrão
const PORT = process.env.PORT || 3000;

// Iniciando o express
const app = express();

// Configurações iniciais
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
//app.use(cors);
// ? app.use(cors());
app.use(express.static("public"));

app.use("/", rotas);
//app.use(express.static(__dirname + "/lootbox"));


// Express ouvindo na PORT definida anteriormente
app.listen(PORT, () =>{
    console.log(`Servidor iniciado na porta ${PORT}`)
});