import { Schema, model } from "mongoose";
import { Collections } from "./index";
import { User } from "@/types/model";

const UserSchema = new Schema<User>({
  fullName: String,
  email: String,
  password: String,
});

const UserModel = model(Collections.User, UserSchema);

export default UserModel;
