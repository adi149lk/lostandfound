const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "must enter the email"],
    trim: true,
    lowercase: true,
    unique: [true, "email already exist"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "must enter the password"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must have uppercase, lowercase, number, special char, min 8 length",
    ],
  },
});
adminSchema.methods.comparepassword = async function (password) {
  return password == this.password;
};

// Block save (create & update)
adminSchema.pre("save", function (next) {
  return next(new Error("Write operation not allowed"));
});

// Block update queries
adminSchema.pre(
  ["updateOne", "findOneAndUpdate", "updateMany"],
  function (next) {
    return next(new Error("Update not allowed"));
  },
);

// Block delete
adminSchema.pre(
  ["deleteOne", "deleteMany", "findOneAndDelete"],
  function (next) {
    return next(new Error("Delete not allowed"));
  },
);

module.exports = mongoose.model("admins", adminSchema);
