const express = require("express");
const { getNumber } = require("../controllers/getNumber");
const router = express.Router();

router.get("/getNumber", getNumber)

module.exports = router;