const User = require("../models/user");

let signup = async (req, res) => {
  console.log("signup function called");
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    //   probably a duplicate email
    res.status(400).json(err);
  }
};

let login = async (req, res) => {
  console.log("call login function");
};

module.exports = { signup, login };
