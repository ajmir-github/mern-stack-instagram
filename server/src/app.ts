// imports
import Express, { Request, Response, NextFunction, Router } from "express";
import cors, { CorsOptions } from "cors";
import path from "path";
import { StatusCode } from "@/utils/handle";
import logError from "./utils/logError";

// ------
export default function createApp({
  corsOptions,
  router,
}: {
  corsOptions: CorsOptions;
  router: Router;
}) {
  // app configuration
  const app = Express();
  app.use(cors(corsOptions));
  app.use(Express.static(path.join(__dirname, "public")));
  app.use(Express.json());
  app.use(Express.urlencoded({ extended: false }));

  // router
  app.use("/api", router);

  // not found
  app.use("*", (request, response) => {
    response.status(StatusCode.NotFound).send("File/Path not found!");
  });

  // error handler
  app.use(function (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    logError(error);
    response.status(StatusCode.Error).send("Server Error: " + error.message);
  });

  return app;
}
