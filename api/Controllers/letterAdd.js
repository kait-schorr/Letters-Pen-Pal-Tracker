const mongoose = require('mongoose');
const Letter = require('../Models/Letter');
const User = require('../Models/User');

const letterAdd = (req, res) => {
  const { userId, date, outbound, letterId, image } = req.body;

  const newestLetter = new Letter({
    date: date,
    outbound: outbound,
    letterId: letterId,
    image: image,
  });

  newestLetter
    .save()
    .then(savedLetter => {
      letterId = savedLetter._id;
      User.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { letter: letterId },
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
