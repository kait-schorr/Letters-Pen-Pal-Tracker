const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ObjectId = mongoose.Schema.Types.ObjectId;

const SALT_ROUNDS = 11;

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
  letters: [{ type: ObjectId, ref: 'Letter' }],
});

UserSchema.pre('save', function(next) {
  bcrypt
    .hash(this.password, SALT_ROUNDS)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {
      console.log('ERROR hashing password: ', err);
      next(err);
    });
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  bcrypt
    .compare(plainTextPW, this.password)
    .then(res => {
      callBack(null, res);
    })
    .catch(err => {
      return callBack(err);
    });
};

module.exports = mongoose.model('User', UserSchema);
