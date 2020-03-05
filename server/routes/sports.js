const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const Location = require("../models/Location");

//DISPLAY ALL LOCATIONS AND EVENTS
router.get("/all", (req, res) => {
  Event.find()
    .then(events => {
      return events;
    })
    .then(events => {
      Location.find().then(locations => {
        res.json({ locations, events });
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

//CREATE EVENT
router.post("/event/add", (req, res, next) => {
  const { location, description, eventTime, nameOfEvent } = req.body;

  Event.create({
    creator: req.user._id,
    location,
    eventTime,
    description,
    nameOfEvent
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

//JOIN USER TO THE EVENT
router.post("/event/join", (req, res) => {
  const eventId = req.body.id;

  Event.findByIdAndUpdate(eventId, { $push: { usersJoining: req.user._id } })
    .then(event => {
      return event;
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

//CREATE LOCATION
// router.post("/location/add", (req, res, next) => {
//   const { name, coordinates, description, sportType } = req.body;

//   Location.create({
//     name,
//     coordinates,
//     description,
//     sportType
//   }).catch(err => {
//     res.status(500).json({
//       message: err.message
//     });
//   });
// });

module.exports = router;
