const mongoose = require("mongoose");
require("dotenv").config();
const vehicles = require("./vehicles");
const Vehicle = require("../models/Vehicle.model");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to DB!");
    await Vehicle.insertMany(vehicles);
  })
  .then(() => {
    mongoose.disconnect();
    console.log("Disconnected from DB!");
  });
