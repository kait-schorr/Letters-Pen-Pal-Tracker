const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./api/Routes/routes");

const server = express();

mongoose
  .connect("mongodb://admin:admin0@ds125841.mlab.com:25841/penpal")
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

routes(server);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));

module.exports = server;
