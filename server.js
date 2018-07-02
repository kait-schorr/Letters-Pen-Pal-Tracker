const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const routes = require("./api/Routes/routes");

const server = express();

mongoose
  .connect("mongodb://localhost/letters")
  .then(() => {
    console.log("Connected to Mongo.");
  })
  .catch(err => {
    console.log("Error connecting to the database.");
  });

server.use(helmet());
server.use(cors());
server.use(morgan("combined"));
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

routes(server);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));

module.exports = server;
