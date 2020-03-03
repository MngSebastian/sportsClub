const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const Location = require("../models/Location");

//DISPLAY ALL LOCATIONS AND EVENTS
router.get("/all", (req, res) => {
  // let allEvents
  Event.find()
    .then(events => {
      // allEvents = events
      // console.log(events)
      return events;
    })
    .then(events => {
      Location.find().then(locations => {
        // console.log(events, "2")
        res.json({ locations, events });
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });

  // Location.find()
  //   .then(locations => {
  //     res.json(locations);
  //   })
  //   .catch(err => {
  //     res.status(500).json({
  //       message: err.message
  //     });
  //   });
});

//CREATE EVENT
router.post("/event/add", (req, res, next) => {
  const { location, description, eventTime } = req.body;

  console.log(location, description, eventTime);
  Event.create({
    creator: req.user._id,
    location,
    eventTime,
    description
  })
    .then(event => {
      res.json({ event });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

//CREATE LOCATION
router.post("/location/add", (req, res, next) => {
  const { name, coordinates, description, sportType } = req.body;
  console.log("loc post", name, coordinates.length, description, sportType);
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
