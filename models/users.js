const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your email !!"],
    }, // String is shorthand for {type: String}
    email: {
      type: String,
      required: [true, "Please enter your email!!"],
      unique: true,
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin"],
        message: "Please select correct role",
      },
      default: "user",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

// Create a model
const UserModel = mongoose.model("User", userSchema);

// Export the model
module.exports = UserModel;
