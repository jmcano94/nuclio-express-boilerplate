const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: Date,
  breakfast: Boolean,
  cars: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room'
  }
});

const Reserve = mongoose.model('Reserve', schema);

module.exports = Reserve;
