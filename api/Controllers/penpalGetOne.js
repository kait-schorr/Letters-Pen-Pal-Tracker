const PenPal = require('../Models/PenPal');

const penpalGetOne = (req, res) => {
  // return the contents of the penpal id supplied
  if (req.params.id) {
    PenPal.findById(req.params.id)
      .then(penpal => {
        console.log(penpal);
        res.status(200).json({
          name: penpal.name,
          address: penpal.address,
          letters: penpal.letters,
        });
      })
      .catch(err => {
        res.status(500).json({
          Error: `Unable to get penpal with Id of: ${req.params.id}`,
          err,
        });
      });
  } else {
    console.log('no id');
  }
};

module.exports = penpalGetOne;
