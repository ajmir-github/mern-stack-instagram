import { Schema, model } from "mongoose";
import { Collections } from "./index";

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: Collections.User,
  },
});

const PostModel = model(Collections.Post, PostSchema);

export default PostModel;
