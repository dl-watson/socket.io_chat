const express = require("express");

const app = express();

app.use(express.json());

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", require("./controllers/chat"));

app.use(require("./middleware/not-found"));
app.use(require("./middleware/error"));

module.exports = app;
