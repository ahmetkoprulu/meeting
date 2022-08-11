import { AuthenticatableRequest } from "@/Api/Middlewares/Session";
import { NextFunction, Response } from "express";

export default function asyncHandler(fn: Handler) {
  return (req: AuthenticatableRequest, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}

type Handler = (
  req: AuthenticatableRequest,
  res: Response,
  next: NextFunction
) => Promise<any>;
