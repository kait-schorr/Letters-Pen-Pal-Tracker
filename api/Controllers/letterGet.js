const mongoose = require('mongoose');
const Letter = require('../Models/Letter');
const User = require('../Models/User');

const letterGet = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    User.findById(id)
      .populate('notes')
      .then(user => {
        res.status(200).json(user.letters);
      })
      .catch(err => {
        res.status(500).json({ Error: 'Unable to get letters', err });
      });
  } else {
    console.log('Please include a User ID with your request');
  }
};

module.exports = letterGet;
