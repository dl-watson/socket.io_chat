const { Router } = require("express");
// const Chat = require("../models/Chat");

module.exports = Router().get("/", (req, res, next) => {
  console.log("hello world");
  res.render("index", { header: "Header", main: "Main" });
});
