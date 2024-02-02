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

export interface RequestCache<Agent = any, Subject = any>
  extends Express.Request {
  cache?:
    | {
        autheticated: false;
        subject?: Subject;
      }
    | {
        autheticated: true;
        agent: Agent;
        subject?: Subject;
      };
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
