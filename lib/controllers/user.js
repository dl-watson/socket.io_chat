/* eslint-disable quotes */
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const ensureAuth = require("../auth/ensure-auth");
const getProfileWithToken = require("../auth/get-profile-with-token");

const User = require("../models/User");

module.exports = Router()
  .get("/verify", ensureAuth, (req, res) => {
    res.json({ verified: true });
  })

  .get("/signup", (req, res) => {
    return res.render("signup");
  })

  .post("/signup", (req, res) => {
    const { ...user } = req.body;
    const name = user.name;
    const email = user.email;
    const password = user.password;

    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);

    if (!email || !password || !name) {
      res.status(400).json({ error: "all fields required" });
      return;
    }

    return User.selectUser(email).then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ error: "email already exists" });
        return;
      }

      User.insertUser(name, email, hash).then((user) => {
        res.json(getProfileWithToken(user));
      });
    });
  })

  .get("/signin", (req, res) => {
    return res.render("signin");
  })

  .post("/signin", (req, res) => {
    const { ...body } = req.body;
    const email = body.email;
    const password = body.password;

    if (!email || !password) {
      res.status(400).json({ error: "email and password required" });
      return;
    }

    return User.selectUser(email).then((user) => {
      if (!user || !bcrypt.compareSync(password, user.hash)) {
        res.status(400).json({ error: "email or password incorrect" });
        return;
      }

      res.json(getProfileWithToken(user));
    });
  });
