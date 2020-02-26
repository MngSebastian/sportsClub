const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


//NOT FINISHED
const eventSchema = new Schema({
  username: String,
  password: String,
  createdEvents: {
    type: Schema.Types.ObjectId,
    ref: "Event"
  },
  joinedEvents: {
    type: Schema.Types.ObjectId,
    ref: "Event"
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
