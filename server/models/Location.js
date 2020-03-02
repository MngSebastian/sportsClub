const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const GeoJSON = require("mongoose-geojson-schema");

const locationSchema = new Schema(
  {
    name: String,
    coordinates: [Number],
    description: String,
    sportType: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
