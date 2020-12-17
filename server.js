/* eslint-disable no-console */
const app = require("./lib/app");
const pool = require("./lib/utils/pool");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 7890;

io.on("connection", (socket) => {
  console.log("a user connected");
});

http.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});

process.on("exit", () => {
  console.log("Goodbye!");
  pool.end();
});
