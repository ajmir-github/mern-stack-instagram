import StatusCodes from "@/utils/StatusCodes";
import { Router, Request, Response } from "express";
import authRoute from "./authRoute";
import userRoute from "./userRoute";
import postRoute from "./postRoute";

const router = Router();

router.use(authRoute);
router.use(userRoute);
router.use(postRoute);

router.use("*", (request: Request, response: Response) => {
  response
    .status(StatusCodes.ServerError)
    .send("Server failed to process the invalid url provided!");
});

export default router;
