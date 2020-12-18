/* eslint-disable no-console */
const app = require("./lib/app");
const pool = require("./lib/utils/pool");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 7890;

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chatter", (message) => {
    console.log("console.log message: ", message);
    io.emit("chatter", message);
  });
});

http.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});

process.on("exit", () => {
  console.log("Goodbye!");
  pool.end();
});
