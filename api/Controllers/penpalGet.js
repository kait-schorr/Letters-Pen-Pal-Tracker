const PenPal = require('../Models/PenPal');
const User = require('../Models/User');

// GETs all penpal IDs for a User ID supplied as req.params.id
const penpalGet = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    User.findById(id)
      .populate('penpals')
      .then(user => {
        res.status(200).json(user.penpals);
      })
      .catch(err => {
        res.status(500).json({ Error: `Unable to get penpals`, err });
      });
  } else {
    console.log('no id');
  }
};

module.exports = penpalGet;
