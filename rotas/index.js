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

router.get('/', (req, res) =>{
    
    Card.find()
    .lean()
    .exec(function(err, cards){
        res.header("Access-Control-Allow-Origin", "*");
        return res.end(JSON.stringify(cards))
    })
})

module.exports = router;