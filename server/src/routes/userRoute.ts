import Express from "express";
import { getSomeUsers } from "@/controllers/userConroller";

const userRoute = Express.Router();

userRoute.get("/", getSomeUsers);

export default userRoute;
