const mongoose = require("mongoose");
const Letter = require("../Models/Letter");
const User = require("../Models/User");

const letterGetByPenpal = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    const penpalid = req.params.penpalid;
    Penpal.findById(penpalid)
      .populate("letters")

      .then(penpal => {
        console.log(penpal);
        res.status(200).json(penpal);
      })
      .catch(err => {
        res.status(500).json({ Error: "Unable to get letters", err });
      });
  } else {
    console.log("Please include a User ID with your request");
  }
};

module.exports = letterGetByPenpal;
