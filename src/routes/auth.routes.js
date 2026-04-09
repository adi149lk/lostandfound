const express = require("express");
const { loginHandler } = require("../controllers/auth.controller");
const authRo = express.Router();
authRo.post("/login", loginHandler);

module.exports = authRo;
