const express = require("express");
const router = express.Router();
const signupData = require("../controllers/signup");

router.post("/signup", signupData)
module.exports = router;
