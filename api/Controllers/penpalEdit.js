const PenPal = require('../Models/PenPal');

const penpalEdit = (req, res) => {
  const { name, address, letters } = req.body;

  PenPal.findByIdAndUpdate(
    req.params.id,
    { name, address, letters },
    { new: true }
  )
    .then(updatedPenPal => {
      res.status(200).json(updatedPenPal);
    })
    .catch(err => {
      res.status(500).json({ Error: `Unable to edit PenPal`, err });
    });
};

module.exports = penpalEdit;
