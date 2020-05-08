// Carregando packages
const express = require("express");
const router = express.Router();

router.use("/", require("./index"));
router.use("/draw", require("./draw"));
router.use("/addcard", require("./addcard"));
router.use("/getallcardsfromuser", require("./getallcardsfromuser"));
router.use("/authenticate", require("./authenticate"));
router.use("/auth/google", require("./auth-google"));
router.use("/auth/google/callback", require("./auth-google-callback"));
router.use("/auth/google/good", require("./auth-google-callback-good"));
router.use("/auth/google/fail", require("./auth-google-callback-fail"));

module.exports = router;