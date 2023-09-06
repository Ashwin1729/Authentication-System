const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateJWT = require("../config/generateJWT");
const bcrypt = require("bcryptjs");

const registerUser = asyncHandler(async (req, res) => {
  const { name, birthDate, email, password } = req.body;

  if (!name || !email || !password || !birthDate) {
    res.status(400);
    throw new Error("Please enter all the required fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new User({
    name,
    birthDate,
    email,
    password: hashedPassword,
  });

  const result = await user.save();

  const data = result._doc;

  if (result) {
    res.status(201).json({
      _id: data._id,
      name: data.name,
      birthDate: data.birthDate,
      email: data.email,
      token: generateJWT(data._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create a user");
  }
});

const loginUser = asyncHandler(async (req, res) => {});

module.exports = { registerUser, loginUser };
