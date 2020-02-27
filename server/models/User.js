const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    createdEvents: {
      type: Schema.Types.ObjectId,
      ref: "Event"
    },
    joinedEvents: {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
