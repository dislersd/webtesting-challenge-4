const express = require("express");
const server = express();
const shoesRouter = require("../shoes/shoesRouter.js");

server.use(express.json());
server.use("/shoes", shoesRouter);

server.get("/", async (req, res) => {
  res.status(200).send("Hello World");
});

module.exports = server;
