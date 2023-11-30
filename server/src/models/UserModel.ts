import { Schema, model } from "mongoose";
import { Collections } from "./index";

const UserSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
});

const UserModel = model(Collections.User, UserSchema);

export default UserModel;
