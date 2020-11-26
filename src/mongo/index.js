require('./connection');
const User = require('./schemas/User');
const Room = require('./schemas/Room');
const Reserve = require('./schemas/Reserve');
const {initFirstUser} = require('./initFirstUser');
const mongoose = require('mongoose');
const {initRoom, initReserve, getReserves} = require('./initData');


initFirstUser(User);

const db = mongoose.connection.db;
const mongo = mongoose.mongo;

module.exports = {
  User,
  Room,
  Reserve,
  db,
  mongo,
}
