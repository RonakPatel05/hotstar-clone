const HotstarShows = require("../models/HotstarShows");
const HotstarShow = async (req, res) => {
  const result = await HotstarShows.find({});
  res.status(200).json(result);
};
module.exports = HotstarShow;
