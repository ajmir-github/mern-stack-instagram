import { Schema, model } from "mongoose";
import { Collections } from "./index";

const CommentSchema = new Schema({
  comment: String,
  post: {
    type: Schema.Types.ObjectId,
    ref: Collections.Post,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: Collections.User,
  },
});

const CommentModel = model(Collections.Comment, CommentSchema);

export default CommentModel;
