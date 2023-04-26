const mongoose = require("mongoose");

const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// model is used to make connection and make operations to database

module.exports = mongoose.model("user", User);
