var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String,
  number: Number,
  game: Number
});

var Event = mongoose.model("Event", EventSchema);
module.exports = Event;
