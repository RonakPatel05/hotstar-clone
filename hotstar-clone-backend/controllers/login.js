require('dotenv').config();
const users = require("../models/login");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginData = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await users.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({
      message: "Login successful",
      success: true,
      token,
      username: user.username,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = loginData;
