const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users.js');
const Artifacts = require('../models/artifacts.js');

/////////
//Create
////////
router.post('/', (req, res) => {
  //bcrypt the entered password
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  Users.create(req.body, (err, createdUser) => {
    //set the newly created user to the session
    req.session.user = createdUser;
    res.json(createdUser);
  })
});

////////////////////////////
//get by user id for favorite page
//////////////////////////
router.get('/favorites/:id', (req, res) => {
  //use the id to find and the user and send back only their favorites
  Users.findById(req.params.id, 'favorites', (err, userFavorites) => {
    res.json(userFavorites)
  })
})

////////////
//Get user by id
//////////
router.get('/:id', (req, res) => {
  //use the session to grab current users id
  Users.findById(req.params.id, (err, foundUser) => {
    res.json(foundUser)
  })
})


///////////
//Get
///////////
router.get('/', (req, res) => {
  Users.find({}, (err, allUsers) => {
    res.json(allUsers)
  })
})

///////////////
//Remove user favorite
/////////////
router.put('/exhibit/remove/:index', (req, res) => {
  //find the current user
  Users.findById(req.session.user._id, (err, foundUser) => {
      //save current favorites array
      let currentFavs = foundUser.favorites
    //splice from the found user array at index passed in
      currentFavs.splice(req.params.index, 1)
    //used the newly spliced array and pass it into the update method
    Users.findByIdAndUpdate(req.session.user._id, {favorites: currentFavs}, (err, updatedUser) => {
      res.json(updatedUser)
    })
  })
})

////////////////////////////
//Update user favorites
//////////////////////////
router.put('/exhibit/:id', (req, res) => {
  //use the exhibit id from the page link
  Artifacts.findById(req.params.id, (err, foundArtifact) => {
    //can log the found artifact
    // console.log(foundArtifact);
    //use the session user id to find the current user
    Users.findById(req.session.user._id, (err, foundUser) => {
      //can log the user
      // console.log(currentUser);
        foundUser.favorites.push(foundArtifact)
      //used the save feature to keep the object in user favorite array
      //https://mongoosejs.com/docs/api.html#model_Model-save
        foundUser.save((error, data) => {
          res.json(data)
      })
    })
  })
})

module.exports = router;
