const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
    cardName: {
        type: String,
        required: true
    },
    CardPath: {
        type: String,
        required: true
    },
    CardRarity: {
        type: String,
        required: true
    },
    CardCollection: {
        type: String,
        required: true
    }
});

const Card = mongoose.model('Lootbox-cards', CardSchema);

module.exports = Card;