const Letter = require('../Models/Letter');

const letterGetOne = (req, res) => {
  // return the title and contents of the letter id supplied
  if (req.params.id) {
    Letter.findById(req.params.id)
      .then(letter => {
        console.log(letter);
        res.status(200).json({ title: letter.title, content: letter.content });
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
