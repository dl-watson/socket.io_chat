const { Router } = require("express");
// const Chat = require("../models/Chat");

module.exports = Router().get("/", (req, res, next) => {
  console.log("hello world");

  // keys supplied to this render method will be accessible as variables in pug
  res.render("index", { header: "Header", main: "Main" });
});
