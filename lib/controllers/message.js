const { Router } = require("express");
const Message = require("../models/Message");

const app = require("../app");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

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

// .post("/chat", (req, res, next) => {
//   Message.create(req.body.user_id, req.body.text)
//     .then((message) => res.send(message))
//     .catch(next);

//   io.emit("message", req.body);
// });
