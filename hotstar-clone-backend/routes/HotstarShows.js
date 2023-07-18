const express = require("express");
const HotstarShows = require("../controllers/HotstarShows");
const router = express.Router();


router.route("/").get(HotstarShows);
module.exports= router; 