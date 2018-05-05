const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date
  },
  modifiedAt: {
    type: Date
  }
});

module.exports = mongoose.model('Users', schema);
