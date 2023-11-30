import { Request } from "express";
import qs from "qs";
export interface CRequest<T extends qs.ParsedQs, U> extends Request {
  body: U;
  query: T;
}
export interface AutheticatedRequest extends Request {
  _auth: null | string;
}
