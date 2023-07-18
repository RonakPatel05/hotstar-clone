const express = require("express");
const { likeData, unlikeData } = require("../controllers/likeData");
const router = express.Router();


router.route("/likedata").put(likeData);
router.delete('/likedata', unlikeData);
module.exports = router; 