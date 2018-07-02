const Letter = require('../Models/Letter');

const letterEdit = (req, res) => {
  const { date, outbound, penpal, image } = req.body;

  Letter.findByIdAndUpdate(req.params.id, { title, content }, { new: true })
    .then(updatedLetter => {
      res.status(200).json(updatedLetter);
    })
    .catch(err => {
      res.status(500).json({ Error: `Unable to edit letter`, err });
    });
};

module.exports = letterEdit;
