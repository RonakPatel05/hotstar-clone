const HotstarShows = require("../models/HotstarShows");

const headerRoute = async (req, res) => {
  try {
    const result = req.params.route;
    const routeResult = await HotstarShows.find({ type: result });

    res.status(200).json(routeResult);
  } catch (error) {
    console.error("Error fetching category data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = headerRoute;
