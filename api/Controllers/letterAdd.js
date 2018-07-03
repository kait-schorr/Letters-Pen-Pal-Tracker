const mongoose = require('mongoose');
const Letter = require('../Models/Letter');
const User = require('../Models/User');

const letterAdd = (req, res) => {
  const { userId, penpal, date, outbound, image } = req.body;
  let letterId;

  const newestLetter = new Letter({
    date: date,
    outbound: outbound,
    penpal: penpal,
    image: image,
  });

  newestLetter
    .save()
    .then(savedLetter => {
      letterId = savedLetter._id;
      User.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { letters: letterId },
        }
      )
        .then(user => {
          res
            .status(200)
            .json({ Message: `Letter Successfully Saved to users database!` });
        })
        .catch(err => {
          res.status(500).json({
            Error: `Unable to find user`,
            err,
          });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ Error: `Unable to save new letter to the DB`, err });
    });
};

module.exports = letterAdd;
