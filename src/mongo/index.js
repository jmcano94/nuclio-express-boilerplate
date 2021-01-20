require('./connection');
const user = require('./schemas/User');
const Room = require('./schemas/Room');
const Reserve = require('./schemas/Reserve');
const Song = require('./schemas/Song');
const {initFirstUser} = require('./initFirstUser');
const mongoose = require('mongoose');
const {initRoom, initReserve, getReserves} = require('./initData');


initFirstUser(user);

const db = mongoose.connection.db;
const mongo = mongoose.mongo;

module.exports = {
  user,
  Room,
  Reserve,
  Song,
  db,
  mongo,
}
