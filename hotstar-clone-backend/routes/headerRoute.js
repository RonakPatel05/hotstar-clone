const express = require("express");
const headerRoute = require("../controllers/headerRoute");
const router = express.Router();


router.route("/category/:route").get(headerRoute);
module.exports= router; 