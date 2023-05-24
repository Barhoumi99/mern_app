const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET;


exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res.status(400).json({ message: 'A user with that email has already registered. Please use a different email.' });
    }

    // Create a new user if the email is not already registered
    const user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "12h",
    });

    res.status(201).json({ token, user });

  } catch (error) {
    res.status(500).json({ message: 'something went wrong in the registerUser function in userController.js' });
  }
};

let visitor = null
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "12h",
    });

    res.status(200).json({ message: "logged in successfuly", token, user });
    visitor = {token, user}
  } catch (error) {
    res.status(500).json({ message: 'something went wrong in the loginUser function in userController.js' });
  }
};
exports.visitor = { visitor }