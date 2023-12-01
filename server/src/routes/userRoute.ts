import Express from "express";
import {
  createUser,
  deleteUser,
  getSingleUser,
  getSomeUsers,
  getUserStats,
} from "@/controllers/userController";
import {
  hashUserPasswordBody,
  passUniqueEmailBody,
  selectUserByIdParam,
  validateBody,
} from "@/middlewares/userMiddleware";
import { UserValidator } from "@/schema/userSchema";

const userRoute = Express.Router();

userRoute.get("/", getSomeUsers);
userRoute.get("/stats", getUserStats);
userRoute.get("/:id", selectUserByIdParam, getSingleUser);
userRoute.post(
  "/",
  validateBody(UserValidator),
  passUniqueEmailBody,
  hashUserPasswordBody,
  createUser
);
userRoute.patch(
  "/:id",
  validateBody(UserValidator.partial()),
  passUniqueEmailBody,
  hashUserPasswordBody,
  selectUserByIdParam,
  deleteUser
);
userRoute.delete("/:id", selectUserByIdParam, deleteUser);

export default userRoute;
