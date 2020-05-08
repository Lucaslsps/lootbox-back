const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport')
const app = express();
const cookieSession = require('cookie-session');
require('../config/passport');

// Inicializando passport
app.use(passport.initialize());
app.use(passport.session());

// Inicializando sessão
app.use(cookieSession({
  name:'Sessão usuário',
  keys:['key1', 'key2']
}))

// DB Config
const db = require('../config/keys').MongoURI;

// Conecta ao Mongo
mongoose.connect(db, { useNewUrlParser: true})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Modelo de card
const Card = require('../models/Card');

router.get('/', (req, res) =>{
    passport.authenticate('google', {scope: ['profile', 'email']})
});

module.exports = router;