const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const PenPalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  // address: { type: ObjectId, ref: 'Address', required: false },
  address: {
    type: String,
    required: true,
  },

  letters: [{ type: ObjectId, ref: 'Letter' }],
});

module.exports = mongoose.model('PenPal', PenPalSchema);
