const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema(
  {
    initials: String,
    seconds: Number,
    numGuesses: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Score", scoreSchema);
