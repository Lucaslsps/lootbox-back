// Carregando packages
const express = require("express");
const router = express.Router();

router.use("/", require("./index"))
router.use("/draw", require("./draw"))

module.exports = router;