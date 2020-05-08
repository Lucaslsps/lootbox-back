const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport')

// DB Config
const db = require('../config/keys').MongoURI;

// Conecta ao Mongo
mongoose.connect(db, { useNewUrlParser: true})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Modelo de card
const Card = require('../models/Card');

router.get('/', (req, res) =>{
    res.send('fail')
})

module.exports = router;