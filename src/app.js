const express = require("express");
const itemRo = require("./routes/item.routes");
const authRo = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const userRo = require("./routes/user.routes");
const app = express();
app.use(cookieParser());

app.use(express.json());
app.use("/api", itemRo);
app.use("/api", userRo);
app.use("/api/admin", authRo);
module.exports = app;
