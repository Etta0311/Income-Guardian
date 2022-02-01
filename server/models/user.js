const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//schema
const userSchema = mongoose.Schema(
  {
    firstname: {
      required: [true, "Required field"],
      type: String,
    },
    lastname: {
      required: [true, "Required field"],
      type: String,
    },
    email: {
      required: [true, "Required field"],
      type: String,
    },
    password: {
      required: [true, "Required field"],
      type: String,
      minlength: 6,
    },
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
    timestamp: true,
  }
);

//virtual
userSchema.virtual("expenses", {
  ref: "Expense",
  foreignField: "user",
  localField: "_id",
});

userSchema.virtual("income", {
  ref: "Income",
  foreignField: "user",
  localField: "_id",
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const saltR = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, saltR);
  next();
});

//Verify password
userSchema.methods.isPasswordMatch = async function (PW) {
  return await bcrypt.compare(PW, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
