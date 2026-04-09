const mongoose = require("mongoose");
const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "item must be there"],
    },
    description: {
      type: String,
      required: [true, "decription needed"],
    },
    status: {
      type: String,
      enum: {
        values: ["LOST", "FOUND"],
        message: "can be LOST OR FOUND",
      },
      default: "LOST",
      required: [true, "Status is required"],
    },
    associate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "persons",
      required: [true, "must need the item associate with whom"],
    },
    location: {
      type: String,
      required: [true, "location must be known"],
    },
  },
  {
    timestamps: true,
  },
);
const itemModel = mongoose.model("item", itemSchema);
module.exports = itemModel;
