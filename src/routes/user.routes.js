const express = require("express");
const { getIuser, postIuser } = require("../controllers/users.controllers");
const userRo = express.Router();
const checkLogin = require("../middlewares/auth.middleware");
userRo.get("/user", getIuser);
userRo.post("/user", [checkLogin, postIuser]);
module.exports = userRo;
