const express = require("express");
const {
  getItems,
  postItems,
  deleteItems,
} = require("../controllers/items.controllers");
const itemRo = express.Router();
const checkLogin = require("../middlewares/auth.middleware");
itemRo.get("/item", getItems);
itemRo.post("/item", [checkLogin, postItems]);
itemRo.delete("/item/:itemId", [checkLogin, deleteItems]);
module.exports = itemRo;
