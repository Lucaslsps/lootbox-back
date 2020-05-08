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
  card = req.body.card
  email = req.body.email

  User.findOneAndUpdate({email:email},{
    $push: {cards:card._id}
  })
  .then(user => {
    newUser = user;
    console.log(user);
    console.log(JSON.stringify(user))
  
  })
})

module.exports = router;