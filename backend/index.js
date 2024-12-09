require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");
const mongoose = require("mongoose");
const config = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//db connection
config.connectDB();

app.get(
  "/test",
  function (req, res, next) {
    console.log("middleware");
    next();
  },
  function (req, res) {
    console.log("controller");
    res.status(200).send({ success: true });
  }
);

//routing
app.use("/api", routes, (req, res) => {
  // res.status(200).send("ayakta")
  // console.log("ayakta");
});

app.listen(3000, () => {
  console.log("BUILD!");
});
