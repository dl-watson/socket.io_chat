const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", require("./controllers/message"));

app.use(require("./middleware/not-found"));
app.use(require("./middleware/error"));

module.exports = app;
