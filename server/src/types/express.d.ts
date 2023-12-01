import Express from "express";

import { Query, ParamsDictionary } from "express-serve-static-core";

export interface RequestQuery<T extends Query> extends Express.Request {
  query: T;
}

export interface RequestBody<T> extends Express.Request {
  body: T;
}
export interface RequestParams<T extends ParamsDictionary>
  extends Express.Request {
  params: T;
}
export interface RequestValidBody<T = any> extends Express.Request {
  validBody: T;
}

export interface RequestAuth<Auth> extends Express.Request {
  auth: Auth | null;
}

export type Middleware<Request extends Express.Request = Express.Request> = (
  request: Request,
  response: Express.Response,
  next: Express.NextFunction
) => any;
export type Handler<Request extends Express.Request = Express.Request> = (
  request: Request,
  response: Express.Response
) => any;
