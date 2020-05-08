// Carregando packages
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require("mongoose");
const request = require("request");
const bodyParser = require("body-parser");
const http = require("http");
const rotas = require("./rotas/rotas");
const io = require("socket.io");
var cors = require('cors');
require('dotenv').config()

// Definindo porta padrão
const PORT = process.env.PORT || 3000;

// Whitelist do CORS
/*
var whitelist = ['http://localhost:3001', 'https://lootbox-pxt.herokuapp.com/draw']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}*/

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

// Iniciando o express
const app = express();

// Configurações iniciais
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", rotas);

// Express ouvindo na PORT definida anteriormente
app.listen(PORT, () =>{
    console.log(`Servidor iniciado na porta ${PORT}`)
});