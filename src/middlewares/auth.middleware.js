const adminModel = require("../models/admin.model");
const jwt = require("jsonwebtoken");

const checkLogin = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, "Pl25GtmRQnPoZtberFEPCrztTDNLWf5l");

    const admin = await adminModel.findById(decoded.userId);
    if (!admin) {
      return res.status(401).json({
        message: "Admin not found",
      });
    }

    req.admin = admin;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = checkLogin;
