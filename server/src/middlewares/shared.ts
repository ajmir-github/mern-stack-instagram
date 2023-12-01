import { Middleware } from "@/types/express";

export const hasIDParam: Middleware = (request, response, next) => {
  request.params;
};
