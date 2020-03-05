const express = require("express");
const router = express.Router();

/* GET home page */
// router.get("/", (req, res, next) => {
//   res.json("index");
// });

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

const sportsRoutes = require("./sports");
router.use("/sports", sportsRoutes);

module.exports = router;
