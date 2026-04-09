const express = require("express");
const { getItems, postItems } = require("../controllers/items.controllers");
const itemRo = express.Router();
const checkLogin = require("../middlewares/auth.middleware");
itemRo.get("/item", getItems);
itemRo.post("/item", [checkLogin, postItems]);
module.exports = itemRo;
