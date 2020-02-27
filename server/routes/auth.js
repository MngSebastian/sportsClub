const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username) {
    return res.status(400).json({ message: "Username can't be empty" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password is too short" });
  }

  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res.status(400).json({ message: "Username is already taken" });
      }
      return bcrypt
        .genSalt()
        .then(salt => {
          return bcrypt.hash(password, salt);
        })
        .then(hash => {
          return User.create({ username: username, password: hash });
        })
        .then(newUser => {
          // passport login
          req.login(newUser, err => {
            if (err)
              res.status(500).json({ message: "Error while logging in" });
            else res.json(newUser);
          });
        });
    })
    .catch(err => {
      res.status(500).json({ message: "Error while authorizing" });
    });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
