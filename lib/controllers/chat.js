const { Router } = require("express");
// const Chat = require("../models/Chat");

module.exports = Router()
  .get("/", (req, res, next) => {
    console.log("landing");

    // keys supplied to this render method will be accessible as variables in pug
    res.render("landing", {});
  })
  .get("/chat", (req, res, next) => {
    console.log("chat");

    res.render("chat", {});
  });
