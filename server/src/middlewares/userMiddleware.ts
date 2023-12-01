import { UserModel } from "@/models";
import {
  Middleware,
  RequestBody,
  RequestParams,
  RequestValidBody,
} from "@/types/express";
import StatusCodes from "@/utils/StatusCodes";
import validateId from "@/utils/validateId";
import { AnyZodObject, Schema, ZodError, z } from "zod";
import * as encrypt from "@/utils/encrypt";
import { UserValidator } from "@/schema/userSchema";

export const selectUserByIdParam: Middleware<
  RequestParams<{ id: string }>
> = async (request, response) => {
  // validate id
  if (!validateId(request.params.id))
    return response
      .status(StatusCodes.ServerError)
      .send("Invalid id provided!");
  // get the user
  const user = await UserModel.findById(request.params.id);
  if (!user) response.status(StatusCodes.NotFound).send("User not found!");
  // cache the user

  response.json(user);
};

export const passUniqueEmailBody: Middleware<
  RequestBody<{ email?: string }>
> = async ({ body: { email } }, response, next) => {
  // if email defined
  if (!email) return next();
  const alreadyCreated = await UserModel.exists({ email });
  // if email not created
  if (!alreadyCreated) return next();
  // fail
  response.status(StatusCodes.BadRequest).json(
    new z.ZodError([
      {
        path: ["email"],
        message: "This email is already creeated!",
        code: "custom",
      },
    ]).format()
  );
};

export const hashUserPasswordBody: Middleware<
  RequestValidBody<{ password?: string }>
> = async (request, response, next) => {
  if (!request.validBody?.password) return next();
  // hash the password
  request.validBody.password = encrypt.hash(request.validBody?.password);
  next();
};

export const validateBody: (
  schema: AnyZodObject
) => Middleware<RequestValidBody> =
  (schema) => async (request, response, next) => {
    try {
      request.validBody = await schema.parseAsync(request.body);
      next();
    } catch (error) {
      response
        .status(StatusCodes.BadRequest)
        .json((error as ZodError).format());
    }
  };
