const HotstarShows = require("../models/HotstarShows");
const detaildata =  async (req, res) => {
    const id = req.params.id;
    
  
    try {
      const details = await HotstarShows.findOne({ _id: id });
  
      if (!details) {
        return res.status(404).send("Detail not found");
      }
  
      res.status(200).json(details);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error retrieving image details");
    }
  }
module.exports = detaildata;
