const { Router } = require("express");
const Message = require("../models/Message");

module.exports = Router()
  .get("/", (req, res, next) => {
    res.render("landing", {});
  })

  .get("/chat", (req, res, next) => {
    Message.find()
      .then((messages) => {
        // to verify in postman, uncomment the following line
        // res.send(messages);
        res.render("chat", {
          messages,
        });
      })
      .catch(next);
  });
