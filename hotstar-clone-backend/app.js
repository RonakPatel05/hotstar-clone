const express = require("express");
const HotstarShows_route = require("./routes/HotstarShows");
const login_route = require("./routes/login");
const signup_route = require("./routes/signup");
const detaildata = require("./routes/detaildata");
const searchdb = require("./models/HotstarShows");
const LikeData = require("./models/likeData");
const likeData = require("./routes/likeData");
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const headerRoute = require("./routes/headerRoute")


const app = express();
const port = process.env.PORT || 8080;

// Connect to the database
connectDB();

// Convert into JSON
app.use(bodyParser.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Routes for getting movie data
app.use("/hotstarShows", HotstarShows_route);
app.use("/", detaildata);
app.use("/", likeData);
app.use("/", login_route);
app.use("/", signup_route);
app.use("/", headerRoute)


// Search API
app.get("/api/search/:key", async (req, res) => {
  const result = await searchdb.find({
    $or: [
      { tittle: { $regex: req.params.key, $options: "i" } },
      { description: { $regex: req.params.key, $options: "i" } },
      { type: { $regex: req.params.key, $options: "i" } },
    ],
  });

  const filteredMovies = result.filter((item) => item.type === "movies");
  const filteredSports = result.filter((item) => item.type === "sports");
  const filteredTvShows = result.filter((item) => item.type === "tv_shows");

  if (filteredSports.length > 0) {
    res.send(filteredSports);
  } else if (filteredMovies.length > 0) {
    res.send(filteredMovies);
  } else if (filteredTvShows.length > 0) {
    res.send(filteredTvShows);
  } else {
    res.send([]);
  }
});

// Liked data API
app.get("/likedata/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    // Fetch the liked data from the database based on the userId
    const likedData = await LikeData.find({ userId });
    res.status(200).json(likedData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching liked data from the database" });
  }
});

// Start the express server
app.listen(port, () => console.log(`Server running on port ${port} at http://localhost:8080`));
