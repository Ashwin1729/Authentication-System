const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateJWT = require("../config/generateJWT");
const bcrypt = require("bcryptjs");

const registerUser = asyncHandler(async (req, res) => {});

const loginUser = asyncHandler(async (req, res) => {});

module.exports = { registerUser, loginUser };
