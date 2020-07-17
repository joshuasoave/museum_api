const express = require('express');
const router = express.Router();
const Artifacts = require('../models/artifacts.js');
const artifactSeed = require('../seed/artifacts.js');

///////
//Create
/////
router.post('/', (req, res) => {
  Artifacts.create(req.body, (err, createdArtifact) => {
    res.json(createdArtifact);
  });
});

///////////
//Get by id
//////////
route.get('/exhibit/:id', (req, res) => {
  Artifacts.findById(req.params.id, (err, foundArtifact) => {
    res.json(foundArtifact);
  })
})

///////////////
//Get By Theme
//////////////
router.get('/:theme', (req, res) => {
  Artifacts.find({theme: req.params.theme}, (err, egyptArtifacts) => {
    res.json(egyptArtifacts);
  })
})


////
//seed
////
router.get('/seed', (req, res) => {
  Artifacts.create(artifactSeed)
  res.redirect('/artifacts');
});


/////////
//Get
////////
router.get('/', (req, res) => {
  Artifacts.find({}, (err, foundArtifacts) => {
    res.json(foundArtifacts);
  });
});

///////
//Delete
/////
router.delete('/:id', (req, res) => {
  Artifacts.findByIdAndRemove(req.params.id, (err, deletedArtifact) => {
    res.json(deletedArtifact);
  });
});

/////
//update
////
router.put('/:id', (req, res) => {
  Artifacts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedArtifact) => {
    res.json(updatedArtifact);
  });
});



module.exports = router;
