import { NextFunction, Request, Response } from "express";
import Session, { MSession, MCookie } from "../../Models/Database/Session";
import User, { MUser } from "../../Models/Database/User";
import cookie from "cookie";
import asyncHandler from "../../Common/asynHandler";

var secret = "secret";

async function SessionMiddleware(
  req: AuthenticatableRequest,
  res: Response,
  next: NextFunction
) {
  var cookies = cookie.parse(req.headers.cookie || "");
  console.log(cookies);
  var sid = cookies.sid;

  var session = await Session.findOne({ _id: sid });
  if (!session || session.isExpired() || session.isClosed) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  var user = await User.findOne({ _id: session.userId });
  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  console.log(cookies);
  next();
}

export type AuthenticatableRequest = Request & {
  session?: MSession;
  user?: MUser;
};

export default asyncHandler(SessionMiddleware);
