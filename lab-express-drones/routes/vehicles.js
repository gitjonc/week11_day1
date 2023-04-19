const express = require("express");
const Vehicle = require("../models/Vehicle.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const vehicles = await Vehicle.find();
  res.render("vehicles/list", { vehicles });
});

router.get("/create", (req, res, next) => {
  res.render("vehicles/create-form");
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const vehicle = await Vehicle.findById(id);
  res.render("vehicles/details", { vehicle });
});

router.post("/create", async (req, res, next) => {
  const { name, wheels, wings, maxSpeed } = req.body;
  await Vehicle.create({ name, wheels, wings, maxSpeed });
  res.redirect("/vehicles");
});

router.get("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const vehicle = await Vehicle.findById(id);
  res.render("vehicles/update-form", { vehicle });
});

router.post("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  await Vehicle.findByIdAndUpdate(id, req.body);
  res.redirect("/vehicles");
});

router.post("/:id/delete", async (req, res, next) => {
  const { id } = req.params;
  await Vehicle.findByIdAndDelete(id);
  res.redirect("/vehicles");
});

module.exports = router;
