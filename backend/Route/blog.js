const express = require("express");
const { getNumber } = require("../controllers/getNumber");
const { getHistory } = require("../controllers/getHistory");
const router = express.Router();

router.get("/getNumber", getNumber);
router.get("/getHistory", getHistory);

module.exports = router;