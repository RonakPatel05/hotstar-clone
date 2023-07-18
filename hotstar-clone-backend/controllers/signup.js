const User = require("../models/login");
const bcrypt = require("bcrypt");

const isStrongPassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  return password.length >= 8 && hasUpperCase && hasLowerCase;
};

const signupData = async (req, res) => {
  const { username, password } = req.body;

  if (!isStrongPassword(password)) {
    return res.status(400).json({
      message: "Password should be at least 8 characters and contain a mix of upper and lower case letters.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const user = new User({ username, password: hashedPassword });
    const savedUser = await user.save();

    if (!savedUser) {
      return res.status(401).json({ message: "Failed to create user" });
    }

    res.json({
      success: true,
      message:
        "You have successfully created an account. Please login with your correct credentials",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Try with correct username and password" });
  }
};

module.exports = signupData;
