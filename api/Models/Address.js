const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const addressSchema = new mongoose.Schema({
  name: {
    type: ObjectId,
    required: true,
  },

  streetNumber: Number,
  streetName: String,
  aptNum: { type: String, required: false },
  city: String,
  state: String,
  country: String,
  zipcode: Number,
});

module.exports = mongoose.model('Address', addressSchema);
