const { Router } = require('express');
const data = require('../mongo');


const router = Router();

router.get('/', (req, res) => {
  return data.Song.find({})
    .then((results) => {
      res.send(results);
    }).catch((err) => {
      res.status(500).send({error: err})
    });
});

router.get('/:songId', (req, res) => {
  return data.Song.findById(req.params.songId).then((result) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send();
    }
  }).catch((err) => {
    res.status(500).send({error: err})
  });
});




module.exports = {
  router,
}
