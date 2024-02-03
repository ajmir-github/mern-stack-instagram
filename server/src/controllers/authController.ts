import Express from "express";
import { Handler, StatusCode } from "@/utils/handle";
import { UserCollection } from "@/utils/MongoDB";
import { UserValidator, UserType } from "@/schema/userSchema";
import { compare, hash, signToken } from "@/utils/encrypt";
import simplifyZodError from "@/utils/simplifyZodError";

interface SignInRequest extends Express.Request {
  body: Pick<UserType, "email" | "password">;
}

export const SignInValidation: Handler<SignInRequest> = ({ body }) => {
  const validation = UserValidator.pick({
    email: true,
    password: true,
  }).safeParse(body);
  if ("error" in validation)
    return {
      status: StatusCode.ValidationError,
      error: simplifyZodError(validation.error),
    };
};

export const SignInHandler: Handler<SignInRequest> = async ({
  body: { email, password },
}) => {
  // find email
  const user = await UserCollection.findOne({ email });
  if (!user)
    return {
      status: StatusCode.ValidationError,
      error: {
        email: {
          _errors: ["Not found!"],
        },
      },
    };
  // match password
  const matchPassword = compare(password, user.password);
  if (!matchPassword)
    return {
      status: StatusCode.ValidationError,
      error: {
        password: {
          _errors: ["Not matched!"],
        },
      },
    };
  // sign token
  const token = signToken(user._id.toString());
  delete user.password;

  return {
    status: StatusCode.Success,
    data: {
      user,
      token,
    },
  };
};

interface SignUpRequest extends Express.Request {
  body: Pick<UserType, "email" | "password" | "fullName">;
}

export const SignUpValidation: Handler<SignUpRequest> = async ({
  body: { email, fullName, password },
}) => {
  const validation = UserValidator.safeParse({ email, fullName, password });
  if ("error" in validation)
    return {
      status: StatusCode.ValidationError,
      error: simplifyZodError(validation.error),
    };
  // if email is already in use
  const user = await UserCollection.findOne({ email });
  if (user)
    return {
      status: StatusCode.ValidationError,
      error: {
        email: "This email is already in use!",
      },
    };
};

export const SignUpHandler: Handler<SignUpRequest> = async ({ body }) => {
  // hash the password
  body.password = hash(body.password);
  // create user
  const { insertedId } = await UserCollection.insertOne(body);
  const user = await UserCollection.findOne({ _id: insertedId });
  if (!user) throw new Error("Server failed to fetch the created user!");
  // create token
  const token = signToken(user._id.toString());
  delete user.password;

  return {
    status: StatusCode.Success,
    data: {
      user,
      token,
    },
  };
};
