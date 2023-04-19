const { model, Schema } = require("mongoose");

const vehicleSchema = new Schema(
  {
    name: String,
    wheels: String,
    wings: String,
    maxSpeed: Number,
  },
  {
    timestamps: true,
  }
);

const Vehicle = model("Vehicle", vehicleSchema);
module.exports = Vehicle;
