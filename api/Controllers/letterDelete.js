const Letter = require('../Models/Letter');

const letterDelete = (req, res) => {
  Letter.findByIdAndRemove(req.params.id)
    .then(response => {
      res.status(200).json({ Message: `letter successfully deleted!` });
    })
    .catch(err => {
      res.status(500).json({ Error: `Unable to delete letter`, err });
    });
};

module.exports = letterDelete;
