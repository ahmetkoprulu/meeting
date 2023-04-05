import Meeting from "../../Models/Database/Meeting";
import { Router, Request, Response, NextFunction } from "express";
import { Logger } from "winston";
import SessionHandler, { AuthenticatableRequest } from "../Middlewares/Session";

const route = Router();

export default (app: Router) => {
  app.use("/meetings", route);

  route.post(
    "/",
    SessionHandler,
    async (req: AuthenticatableRequest, res: Response, next: NextFunction) => {
      var meeting = new Meeting({
        createdBy: req.user!._id,
      });

      await meeting.save();
      var id = meeting._id;
      return res.status(200).json({ id: meeting._id });
    }
  );

  route.get(
    "/:id",
    SessionHandler,
    async (req: AuthenticatableRequest, res: Response, next: NextFunction) => {
      var model = req.body;

      return res.status(200).json(model);
    }
  );
};
