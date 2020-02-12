const mongoose = require("mongoose");
const schems = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "public"
  },
  desctiption: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("post", postSchema);
