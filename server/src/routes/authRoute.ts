import Express from "express";
import handle from "@/utils/handle";
import {
  SignInHandler,
  SignInValidation,
  SignUpHandler,
  SignUpValidation,
} from "@/controllers/authController";

const authRoute = Express.Router();

authRoute.post("/sign-in", handle(SignInValidation, SignInHandler));

authRoute.post("/sign-up", handle(SignUpValidation, SignUpHandler));

export default authRoute;
