const mongoose = require('mongoose');
const PenPal = require('../Models/PenPal');
const User = require('../Models/User');

const penpalAdd = (req, res) => {
  const { userId, name, address } = req.body;
  let noteId;

  const newestPenPal = new PenPal({
    name: name,
    address: address,
  });

  newestPenPal
    .save()
    .then(savedPenPal => {
      penpalId = savedPenPal._id;
      User.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { penpals: penpalId },
        }
      )
        .then(user => {
          res
            .status(200)
            .json({ Message: `PenPal Successfully Saved to users database!` });
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
        .json({ Error: `Unable to save new penpal to the DB`, err });
    });
};

module.exports = penpalAdd;
