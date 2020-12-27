/* eslint-disable no-console */
const app = require("./lib/app");
const pool = require("./lib/utils/pool");

const PORT = process.env.PORT || 7890;

// const http = require("https").createServer(app);
const io = require("socket.io")(
  app.listen(PORT, () => {
    console.log(`Started on ${PORT}`);
  }),
  {
    cors: {
      origin: true,
    },
  }
);

const Message = require("./lib/models/Message");

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chatter", async (message) => {
    console.log("console.log message: ", message);

    await Message.create(message.user_id, message.text);

    Message.findById(message.user_id).then((data) => io.emit("response", data));
  });
});

process.on("exit", () => {
  console.log("Goodbye!");
  pool.end();
});
