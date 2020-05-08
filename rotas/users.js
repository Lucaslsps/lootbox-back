const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// DB Config
const db = require('../config/keys').MongoURI;

// Conecta ao Mongo
mongoose.connect(db, { useNewUrlParser: true})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Modelo de card
const Card = require('../models/Card');

// Modelo de usuário
const User = require('../models/User');

router.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.body.profile_object);

    const newUser = new User({
        email:req.body.profile_object.email,
        password:"123"
    })
    res.header('x-auth-token');

    return res.end(JSON.stringify(newUser))
})

module.exports = router;