// const db = require("../models/HotstarShows");
// const search = async (req, res) => {
//     const result = await db.find({
//       $or: [
//         { tittle: { $regex: req.params.key } },
//         { description: { $regex: req.params.key } },
//         { year: String(parseInt(req.params.key)) }, 
//         { type: { $regex: req.params.key } },
//       ],
//     });
//     res.send(result);
//   }
// module.exports = search;
