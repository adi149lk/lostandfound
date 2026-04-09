const mongoose = require("mongoose");
const personSchme = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "person name should given"],
      match: [/^[A-Za-z]{5,}$/, "Only letters, minimum 5 characters"],
    },
    phone: {
      type: Number,
      required: [true, "person number should given"],
      minlength: 10,
      maxlength: 10,
      unique: [true, "phone number already associaate with a person"],
    },
    email: {
      type: String,
      required: [true, "must enter the email"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
  },
  {
    timestamps: true,
  },
);
const personModel = mongoose.model("persons", personSchme);
module.exports = personModel;
