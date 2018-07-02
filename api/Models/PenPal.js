const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const PenPalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    streetNumber: Number,
    streetName: String,
    aptNum: { type: String, required: false },
    city: String,
    state: String,
    country: String,
    zipcode: Number,
    required: true,
  },

  letters: {
    type: [{ type: ObjectId, ref: 'Letter' }],
  },
});

module.exports = mongoose.model('PenPal', PenPalSchema);
