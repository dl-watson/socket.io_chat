const { Router } = require("express");
const Message = require("../models/Message");

module.exports = Router()
  .get("/", (req, res, next) => {
    res.render("landing", {});
  })

  .get("/chat", (req, res, next) => {
    return Message.find()
      .then((messages) => {
        res.render("chat", {
          messages,
        });
      })
      .catch(next);
  })

  // "/chat" will become a protected route once a sign-up/login portal is created and wired

  .get("/test", (req, res, next) => {
    return Message.find()
      .then((data) => {
        res.send(data);
      })
      .catch(next);
  })

  .get("/test/:id", (req, res, next) => {
    return Message.findById(req.params.id)
      .then((data) => res.send(data))
      .catch(next);
  });
