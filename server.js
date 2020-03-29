// Carregando packages
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require("mongoose");
const request = require("request");
const bodyParser = require("body-parser");
const http = require("http");
const rotas = require("./rotas/rotas");

// Definindo porta padrão
const PORT = process.env.PORT || 3000;

// Iniciando o express
const app = express();

// Configurações iniciais
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", rotas);

// Express ouvindo na PORT definida anteriormente
app.listen(PORT, () =>{
    console.log(`Servidor iniciado na porta ${PORT}`)
});