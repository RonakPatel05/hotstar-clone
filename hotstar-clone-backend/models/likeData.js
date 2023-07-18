const mongoose = require("mongoose");

const LikeDataSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    default: false,
  },
});

const LikeData = mongoose.model("LikeData", LikeDataSchema);

module.exports = LikeData;
