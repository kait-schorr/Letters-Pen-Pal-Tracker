const PenPal = require('../Models/PenPal');

const penpalDelete = (req, res) => {
  PenPal.findByIdAndRemove(req.params.id)
    .then(resposne => {
      res.status(200).json({ Message: `PenPal successfully deleted!` });
    })
    .catch(err => {
      res.status(500).json({ Error: `Unable to delete PenPal`, err });
    });
};

module.exports = penpalDelete;
