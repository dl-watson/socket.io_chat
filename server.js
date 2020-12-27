/* eslint-disable no-console */
const app = require("./lib/app");
const pool = require("./lib/utils/pool");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// const Router = require("./lib/controllers/message");
const Message = require("./lib/models/Message");

const PORT = process.env.PORT || 7890;

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chatter", (message) => {
    console.log("console.log message: ", message);

    console.log(message.user_id, message.text);

    Message.create(message.user_id, message.text).then((data) => {
      socket.emit("chatter", data);
    });
  });
});

http.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});

process.on("exit", () => {
  console.log("Goodbye!");
  pool.end();
});
