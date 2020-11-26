const mongoose = require("mongoose");
const db = require("./index");


const initRoom = (Room) => {
  const data = [
    {
      name: '1A',
      maxPeople: 2
    },
    {
      name: '1B',
      maxPeople: 2
    },
    {
      name: '2A',
      maxPeople: 2
    },
    {
      name: '2B',
      maxPeople: 2
    },
  ];
  data.forEach(room => {
    Room.create(room).then(docRoom => {
      console.log('\n Created room: \n' + docRoom);
      return docRoom;
    });
  });
}

const initReserve = async (Reserve) => {
  const data = {
      date: new Date()
    };
  const reserves = await Reserve.create(data).then(docReserve => {
      console.log('\n Created reserve: \n' + docReserve);
      return docReserve;
  }).catch((err) => err);

  const callback = () => {
    console.log('hola');
  };
  console.log('Reserve id: ' + reserves._id);
  Reserve
    .findByIdAndUpdate(reserves._id, { $set: { user: '5fb4ceff99e66501ae8ee859' } }, {new: true})
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  Reserve.findByIdAndUpdate(reserves._id, { $set: { room: '5fb5252bcb9722732e2877a8' } })
    .then((result) => {
      console.log(result);
    }).catch((err) => {
    console.log(err);
  });
}

const getReserves = async (Reserve) => {


  Reserve.find({room: '5fb5252bcb9722732e2877a8'}).populate('user').populate('room')
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });


}


module.exports = {
  initRoom,
  initReserve,
  getReserves,
}