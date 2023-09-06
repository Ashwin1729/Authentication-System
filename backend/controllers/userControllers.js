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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("No such user exists. Please SignUp to continue!");
  }

  const matchedPassword = await bcrypt.compare(password, user.password);

  if (user && matchedPassword) {
    res.json({
      _id: user._id,
      name: user.name,
      birthDate: user.birthDate,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser, loginUser };
