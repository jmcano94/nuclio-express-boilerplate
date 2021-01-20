const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  trackId: String,
});

const Song = mongoose.model('Song', schema);

module.exports = Song;
