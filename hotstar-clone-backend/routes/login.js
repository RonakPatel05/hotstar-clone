const express = require("express");
const router = express.Router();
const loginData = require("../controllers/login");

router.post("/login", loginData)
module.exports = router;
