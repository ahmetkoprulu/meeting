import { Router, Request, Response, NextFunction } from "express";
import { Logger } from "winston";
import SessionHandler, { AuthenticatableRequest } from "../Middlewares/Session";

const route = Router();

export default (app: Router) => {
  app.use("/meetings", route);

  route.post(
    "/create",
    async (req: Request, res: Response, next: NextFunction) => {
      var model = req.body;

      return res.status(200).json(model);
    }
  );
};
