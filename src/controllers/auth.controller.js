const adminModel = require("../models/admin.model");
const jwt = require("jsonwebtoken");
exports.loginHandler = async (req, res, next) => {
  const { email, password } = req.body;
  const isAdmin = await adminModel.findOne({ email: email });
  if (!isAdmin) {
    return res.status(401).json({
      message: "invalid admin email",
    });
  }
  const match = await isAdmin.comparepassword(password);
  if (!match) {
    return res.status(401).json({
      message: "password invaild",
    });
  }
  const token = jwt.sign(
    { userId: isAdmin._id },
    "Pl25GtmRQnPoZtberFEPCrztTDNLWf5l",
    { expiresIn: "3d" },
  );
  res.cookie("token", token);
  res.status(200).json({
    user: {
      _id: isAdmin._id,
      email: isAdmin.email,
    },
    token,
  });
};
