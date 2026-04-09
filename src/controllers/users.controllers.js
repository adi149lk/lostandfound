const personModel = require("../models/persons.models");

exports.getIuser = async (req, res, next) => {
  try {
    const persons = await personModel.find();
    return res.status(200).json({
      persons,
    });
  } catch (err) {
    res.status(500).json({
      message: "err while getting persons",
      error: err.message,
    });
  }
};
exports.postIuser = async (req, res, next) => {
  const { name, phone, email } = req.body;
  try {
    const person = await personModel.create({
      name,
      phone,
      email,
    });
    res.status(201).json({
      person,
    });
  } catch (err) {
    res.status(500).json({
      message: "err while add persons",
      error: err.message,
    });
  }
};
