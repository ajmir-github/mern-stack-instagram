import handle, { StatusCode } from "@/utils/handle";
import { Router, Request, Response } from "express";
// import authRoute from "./authRoute";
// import userRoute from "./userRoute";
// import postRoute from "./postRoute";

const router = Router();

// router.use("/auth", authRoute);
// router.use("/user", userRoute);
// router.use("/post", postRoute);

router.use(
  "*",
  handle((request) => {
    throw `Failed to process url: '${request.url}'`;
  })
);

export default router;
