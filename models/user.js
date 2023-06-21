import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[1-zA_Z0-9._]+(?<![_.])$/,
      "Username is invalid",
    ]
  },
  image:
  {
    type: String,
  }
});

const User = models.User ||  model("User",UserSchema);
export default User;