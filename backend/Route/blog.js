const express = require("express");
const { generateOTP2 } = require("../controllers/RandomNumberGeneration");
const router = express.Router();

router.get("/getNumber", generateOTP2)

module.exports = router;