const Score = require("../models/score");

module.exports = {
  getAllScores,
  create: newScore
};

async function getAllScores(req, res) {
  const scores = await Score.find({}).sort({ numGuesses: 1, seconds: 1 });
  res.json(scores);
}

async function newScore(req, res) {
  console.log("new Score called");
  const score = new Score(req.body);
  try {
    await score.save();
    res.status(201).json(score);
  } catch (err) {
    res.status(400).json(err);
  }
}
