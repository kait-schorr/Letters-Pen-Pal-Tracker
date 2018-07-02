const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const LetterSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },

  outbound: {
    type: Boolean,
    required: true,
  },

  penpal: {
    type: ObjectId,
    ref: 'PenPal',
  },

  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Letter', LetterSchema);
