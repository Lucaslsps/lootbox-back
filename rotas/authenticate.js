const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


// DB Config
const db = require('../config/keys').MongoURI;

// Conecta ao Mongo
mongoose.connect(db, { useNewUrlParser: true})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Modelo de usuário
const User = require('../models/User');

// POST
router.post('/', (req, res) =>{
  //console.log(req.body);
  const profile = req.body.profile_object;

  User.findOne({email:profile['email']})
  .then(user => {
    if(user){
      oldUser = JSON.stringify(user);
      
      res.end(oldUser);
    }else{
      const newUser = new User({
        username:"",
        password:"",
        email:profile['email'],
        name:profile['name'],
        googleId:profile['googleId'],
        googleImgUrl:profile['imageUrl'],
        cards:[]
      });
    
      newUser.save(function (err){
        if (err) return res.end(err)
      })

      res.end(JSON.stringify(newUser))
    }
  })
})

module.exports = router;