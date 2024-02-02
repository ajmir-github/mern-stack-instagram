import { UserModel } from "@/models";
import * as encrypt from "@/utils/encrypt";
import { Handler, RequestBody, RequestValidBody } from "@/types/express";
import StatusCodes from "@/utils/StatusCode";

export const getSomeUsers: Handler = async (request, response) => {
  const users = await UserModel.find({}, "-password -__v");
  response.json(users);
};

export const getSingleUser: Handler = async () => {};
export const getUserStats: Handler = async () => {};

export const createUser: Handler<RequestValidBody<any>> = async (
  request,
  response
) => {
  const user = await UserModel.create(request.validBody);
  response.status(StatusCodes.Created).json({ _id: user.id });
};

export const updateUser: Handler = async () => {};
export const deleteUser: Handler = async () => {};
