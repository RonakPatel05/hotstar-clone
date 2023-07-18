const likedata = require("../models/likeData");

const likeData = async (req, res) => {
    const { userId, itemId } = req.body;

    try {
        const existingLike = await likedata.findOne({ userId, itemId });

        if (existingLike) {
            // If the entry exists, toggle the `liked` field
            existingLike.liked = !existingLike.liked;
            await existingLike.save();
        } else {
            // If the entry doesn't exist, create a new one and set `liked` to true
            const newLike = new likedata({ userId, itemId, liked: true });
            await newLike.save();
        }

        res.status(200).json({ message: "Data successfully updated in the database" });
    } catch (error) {
        res.status(500).json({ error: "Error updating data in the database" });
    }
};
const unlikeData = async (req, res) => {
    const { userId, itemId } = req.body;

    try {
        await likedata.findOneAndDelete({ userId, itemId });
        res.status(200).json({ message: "Data successfully deleted from the database" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting data from the database" });
    }
};

module.exports = { likeData, unlikeData };
