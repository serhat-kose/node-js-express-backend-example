const express = require("express");
const router = express.Router();

let players = require("../dummyDatabase");

router.get("/listele", async (req, res) => {
  try {
    res.status(200).json({
      data: players
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router ;
