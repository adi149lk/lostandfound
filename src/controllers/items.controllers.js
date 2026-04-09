const personModel = require("../models/persons.models");
const itemModel = require("../models/item.models");
exports.getItems = async (req, res, next) => {
  try {
    const items = await itemModel.find().populate("associate", "name");
    return res.status(200).json({
      items,
    });
  } catch (err) {
    res.status(500).json({
      message: "err while getting persons",
      error: err.message,
    });
  }
};
exports.postItems = async (req, res, next) => {
  const { name, description, status, location, phone } = req.body;
  const isPerson = await personModel.findOne({ phone: phone });
  if (!isPerson) {
    return res.status(500).json({
      message: "invaild user  1st entry the person info ",
    });
  }
  try {
    const item = await itemModel.create({
      name,
      description,
      status,
      location,
      associate: isPerson._id,
    });
    return res.status(200).json({
      item,
    });
  } catch (err) {
    res.status(500).json({
      message: "err while add item",
      error: err.message,
    });
  }
};
