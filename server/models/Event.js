const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    name: String,
    location: String,
    eventTime: String,
    description: String,
    usersJoining: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
