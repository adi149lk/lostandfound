const mongoose = require("mongoose");
const db_connect = async (callback) => {
  try {
    await mongoose.connect("db_url");
    console.log("db connected successfully");
    callback();
  } catch (err) {
    console.log("error while connecting db", err);
  }
};
module.exports = db_connect;
