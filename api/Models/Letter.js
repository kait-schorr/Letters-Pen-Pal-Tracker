const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const LetterSchema = new mongoose.Schema({
  dateReceived: {
    type: String,
    required: true,
  },
});
