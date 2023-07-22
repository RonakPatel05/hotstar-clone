require('dotenv').config();

const mongoose = require("mongoose");

const connectDB = () => {

  const connectionString =process.env.MONGO_URL;


  mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
};

module.exports = connectDB;
