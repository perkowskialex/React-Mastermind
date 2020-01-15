const express = require("express");
const router = express.Router();
const scoresCtrl = require("../../controllers/scores");

router.get("/scores", scoresCtrl.getAllScores);
router.post("/scores", scoresCtrl.create);

module.exports = router;
