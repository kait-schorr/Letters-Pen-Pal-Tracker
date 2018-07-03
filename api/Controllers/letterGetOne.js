const Letter = require('../Models/Letter');

const letterGetOne = (req, res) => {
  // return the letter object of the letter ObjectId supplied
  if (req.params.id) {
    Letter.findById(req.params.id)
      .then(letter => {
        console.log(letter);
        res.status(200).json(letter);
      })
      .catch(err => {
        res.status(500).json({
          Error: `Unable to get letter with Id of: ${req.params.id}`,
          err,
        });
      });
  } else {
    console.log('no id');
  }
};

module.exports = letterGetOne;
