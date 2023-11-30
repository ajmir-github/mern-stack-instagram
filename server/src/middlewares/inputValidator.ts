import { NextFunction, Request, Response } from "express";
import z from "zod";

export default function inputValidator(validatorFunc: z.AnyZodObject) {
  return (request: Request, response: Response, next: NextFunction) => {
    // get the relative function
    const validator =
      request.method === "POST" ? validatorFunc : validatorFunc.partial();
    // validation
    const validation = validator.safeParse(request.body);
  };
}
