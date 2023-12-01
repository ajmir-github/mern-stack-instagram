import { UserModel } from "@/models";
import * as encrypt from "@/utils/encrypt";
import { Handler } from "@/types/express";

export const getSomeUsers: Handler = async (request, response) => {
  const users = await UserModel.find();
  response.json(users);
};
