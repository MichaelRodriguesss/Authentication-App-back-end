const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose.set("strictQuery", true);

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
      required: "Email address is required",
      match: /.+\@.+\..+/,
    },

    src: {
      type: String,
    },

    phone: {
      type: String,
    },

    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
