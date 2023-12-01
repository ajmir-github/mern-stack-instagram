// env
import dotenv from "dotenv";
dotenv.config();
// imports
import Express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import StatusCodes from "@/utils/StatusCodes";
import router from "@/routes";

// vars
const PORT = process.env.PORT || "3000";
const CLIENT_URL = process.env.CLIENT_URL || "*";
const DATABASE_URL = process.env.MONGODB_URL;

if (!DATABASE_URL) throw new Error("Define DATABASE_URL in .env!");

// app configuration
const app = Express();
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(Express.static(path.join(__dirname, "public")));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

// router
app.use("/api", router);

// not found
app.use("*", (request, response) => {
  response.status(StatusCodes.Ok).send("File/Path not found!");
});

// error handler
app.use(function (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (process.env.NODE_ENV !== "production") console.log(error);
  response
    .status(StatusCodes.ServerError)
    .send("Server Error: " + error.message);
});

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`SERVER LISTEING \n\tPORT:${PORT}  CLIENT_URL:${CLIENT_URL}`)
    );
  })
  .catch(console.error);
