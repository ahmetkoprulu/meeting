import { Router, Request, Response, NextFunction } from "express";
import { Logger } from "winston";
import SessionHandler, { AuthenticatableRequest } from "../Middlewares/Session";
import MLogin from "../../Models/MLogin";
import MRegister from "../../Models/MRegister";
import User from "../../Models/Database/User";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);
  route.get(
    "/current",
    SessionHandler,
    async (req: AuthenticatableRequest, res: Response, next: NextFunction) => {
      return res.status(200).json(req.user);
    }
  );

  route.get(
    "/:id",
    SessionHandler,
    async (req: AuthenticatableRequest, res: Response, next: NextFunction) => {
      let id = req.params.id;
      console.log(id);
      var user = await User.findOne({ _id: id });
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }

      return res.status(200).json(user);
    }
  );
};
