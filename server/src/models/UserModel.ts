import { Schema, model } from "mongoose";
import { Collections } from "./index";
import { UserType } from "@/schema/userSchema";

const UserSchema = new Schema<UserType>({
  fullName: String,
  email: String,
  password: String,
});

const UserModel = model(Collections.User, UserSchema);

export default UserModel;
