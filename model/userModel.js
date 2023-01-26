const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 30,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: validator.isEmail,
    },
    age: {
      type: Number,
      required: true,
      maxlength: 3,
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ["male", "female"],
      },
    },
  },
  {
    toJson: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
