const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  maxPeople: Number,
});

const Room = mongoose.model('Room', schema);

module.exports = Room;
