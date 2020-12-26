const { Router } = require("express");
const Message = require("../models/Message");

const app = require("../app");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

module.exports = Router()
  .get("/", (req, res, next) => {
    console.log("landing");

    res.render("landing", {});
  })

  .get("/chat", (req, res, next) => {
    Message.find()
      .then((messages) => {
        res.render("chat", {
          user: messages.user,
          messages,
        });
      })
      .catch(next);

    // res.render("chat", {});
  })

  .post("/chat", (req, res, next) => {
    Message.create(req.body.text, req.body.name)
      .then((message) => res.send(message))
      .catch(next);

    io.emit("message", req.body);
  });
