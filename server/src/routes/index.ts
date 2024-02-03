import handle from "@/utils/handle";
import { Router } from "express";
import authRoute from "./authRoute";
// import userRoute from "./userRoute";
// import postRoute from "./postRoute";

const router = Router();

router.use("/auth", authRoute);
// router.use("/user", userRoute);
// router.use("/post", postRoute);

router.use(
  "*",
  handle((request) => {
    throw new Error(`Failed to process url: '/api${request.url}'`);
  })
);

export default router;
