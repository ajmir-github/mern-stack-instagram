import StatusCodes from "@/utils/StatusCode";
import { NextFunction, Request, Response } from "express";
import { SafeParseReturnType } from "zod";

/**
 *
 * @param zodValidator
 * validate the body and cache it in the request.validBody
 */

export default function inputValidator(zodValidator: any) {
  return (
    request: Request & { validBody: Object },
    response: Response,
    next: NextFunction
  ) => {
    // get the relative function
    let validator = zodValidator;
    if (request.method === "POST") validator = zodValidator.partial();
    // validation
    const validation = validator.safeParse(request.body);
    if (!validation.success)
      return response.status(StatusCodes.BadRequest).json(validation.error);
    // cache the valid body
    request.validBody = validation.data;
    next();
  };
}
