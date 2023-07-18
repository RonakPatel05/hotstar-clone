const mongoose = require("mongoose");

const HotstarShows = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },

});
module.exports = mongoose.model("HotstarShows", HotstarShows);
