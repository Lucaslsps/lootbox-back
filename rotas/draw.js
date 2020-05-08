const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const http = require('http');
const io = require('socket.io');
const app = express();



// DB Config
const db = require('../config/keys').MongoURI;

// Conecta ao Mongo
mongoose.connect(db, { useNewUrlParser: true})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Modelo de card
const Card = require('../models/Card');

router.get('/', async (req, res) => {
    try{
        Card.find().lean().exec()
        .then(allCards =>{
            const selectedCollection = allCards[Math.floor(Math.random() * allCards.length)]["cardCollection"];
            const selectedCards = []

            for(var i = 0; i< 3; i++){
                const RNG = Math.floor(Math.random() * 100);
                selectedCard = allCards[Math.floor(Math.random() * allCards.length)];

                if(RNG <= 80){
                    while(selectedCard["cardRarity"] != "common" || selectedCard["cardCollection"] != selectedCollection || selectedCards.includes(selectedCard)){


                        selectedCard = allCards[Math.floor(Math.random() * allCards.length)];
                    }


                    selectedCards.push(selectedCard);
                }else if(RNG <= 95){
                    while(selectedCard["cardRarity"] != "rare" || selectedCard["cardCollection"] != selectedCollection || selectedCards.includes(selectedCard)){

                        selectedCard = allCards[Math.floor(Math.random() * allCards.length)];
                    }
                    selectedCards.push(selectedCard);
                }else{
                    while(selectedCard["cardRarity"] != "epic" || selectedCard["cardCollection"] != selectedCollection || selectedCards.includes(selectedCard)){

                        selectedCard = allCards[Math.floor(Math.random() * allCards.length)];
                    }


                    selectedCards.push(selectedCard);
                }
            }
            

            res.header("Access-Control-Allow-Origin", "*");
            return res.end(JSON.stringify(selectedCards))
        });

    } catch(error){
        res.status(500).send(error);
    }

})

module.exports = router;