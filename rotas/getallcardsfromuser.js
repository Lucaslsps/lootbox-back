const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// DB Config
const db = require('../config/keys').MongoURI;

// Conecta ao Mongo
mongoose.connect(db, { useNewUrlParser: true})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Modelo de card
const Card = require('../models/Card');
// Modelo de user
const User = require('../models/User');

router.post('/', (req, res) =>{
  res.end("getallcardsfromuser")
})

module.exports = router;