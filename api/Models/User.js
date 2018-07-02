const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },

  penpals: [{ type: ObjectId, ref: 'PenPal' }],
});

module.exports = mongoose.model('User', UserSchema);
