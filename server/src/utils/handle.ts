import Express from "express";
import logError from "./logError";

export enum StatusCode {
  Success = 200,
  Created = 201,
  NoContent = 204,
  ValidationError = 400,
  AuthorizationRequired = 401,
  PaymentRequired = 402,
  AuthenticationRequired = 403,
  NotFound = 404,
  Error = 500,
}

type Response =
  | {
      status: StatusCode.Success | StatusCode.Created;
      data: any;
    }
  | {
      status: StatusCode.ValidationError;
      error: any;
    }
  | {
      status: StatusCode;
      error: {
        message: string;
      };
    };

type PossibleResponse = void | undefined | null | Error | Response;

export type Handler<
  Request extends Express.Request = Express.Request,
  Carrier extends object = object
> = (
  request: Request,
  carrier: Carrier
) => PossibleResponse | Promise<PossibleResponse>;

export default function handle<RequestHandler extends Handler = Handler>(
  ...handlers: RequestHandler[]
): (request: Express.Request, response: Express.Response) => any {
  return async (request, response) => {
    try {
      const carrier: object = {};
      for (const handler of handlers) {
        const result = await handler(request, carrier);
        if (!result) continue; // next if void, undefined, or null
        if (result instanceof Error) throw result; // catch if error
        return response.status(result.status).json(result); // other sound responses
      }
      // if not response
      throw new Error("No handler return any response back!");
    } catch (error) {
      // log error here
      logError(error);
      response.status(error.status || 500).json({
        error: {
          message: error.message,
        },
      });
    }
  };
}
