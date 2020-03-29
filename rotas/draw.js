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

async function getAllCards(){
    return(await Card.find().lean().exec());
}

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
            res.send(selectedCards);
        });

    } catch(error){
        res.status(500).send(error);
    }
/*
     Card
    .find({}, {colecao:1})
    .distinct('colecao', function(err, colecao){
        col_escolhida = colecao[Math.floor(Math.random() * colecao.length)];
    })
    .then(ret =>{
        
        Card
        .find({colecao:col_escolhida})
        .then( col_escolhida_valores =>{            
            console.log(col_escolhida);    
            cards_escolhidos = [];

            while(cards_escolhidos.length < 3){
                card_aux = col_escolhida_valores[Math.floor(Math.random() * col_escolhida_valores.length)];
                if(cards_escolhidos.includes(card_aux)){continue;};
                cards_escolhidos.push(card_aux);
            }
            res.header("Access-Control-Allow-Origin", "*");
            return res.end(JSON.stringify(cards_escolhidos))
            res.send('index.ejs', {cards: cards_escolhidos, colecao: col_escolhida});
        })
    });*/
})

module.exports = router;