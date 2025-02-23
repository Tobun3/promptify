import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email is already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    unique: [true, "Username is already exists!"],
    required: [true, "Username is required!"],
  },
  image: {
    type: String,
  },
});

// First check if the model exists before creating it
const User = models.User || model("User", userSchema);

export default User;
