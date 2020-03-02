const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const Location = require("../models/Location");

//DISPLAY ALL LOCATIONS AND EVENTS
router.get("/all", (req, res) => {
  // Event.find()
  //   .then(events => {
  //     console.log(events)
  //     res.json(events);
  //   })
  //   .catch(err => {
  //     res.status(500).json({
  //       message: err.message
  //     });
  //   });

  Location.find()
    .then(locations => {
      res.json(locations);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

//CREATE EVENT
router.post("/event/add", (req, res, next) => {
  const { name, location, description } = req.body;

  Event.create({
    creator: req.user._id,
    location,
    eventTime,
    description,
    usersJoining
  }).catch(err => {
    res.status(500).json({
      message: err.message
    });
  });
});

//CREATE LOCATION
router.post("/location/add", (req, res, next) => {
  const { name, coordinates, description, sportType } = req.body;
  // console.log("loc post", name, coordinates, description, sportType);
  Location.create({
    name,
    coordinates,
    description,
    sportType
  }).catch(err => {
    res.status(500).json({
      message: err.message
    });
  });
});

module.exports = router;
