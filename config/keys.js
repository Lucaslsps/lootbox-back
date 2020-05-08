const express = require('express');
const router = express.Router();
require('dotenv').config()
module.exports = router;
module.exports = {
    MongoURI: process.env.MONGO_URI
}
