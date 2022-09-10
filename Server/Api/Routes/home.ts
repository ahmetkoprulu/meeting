import { Router, Request, Response, NextFunction } from "express";
import { Logger } from "winston";
import SessionHandler, { AuthenticatableRequest } from "../Middlewares/Session";
import MLogin from "../../Models/MLogin";
import MRegister from "../../Models/MRegister";
import User from "../../Models/Database/User";

const route = Router();

export default (app: Router) => {
  app.use("/", route);

  route.post(
    "/sign-in",
    async (req: Request, res: Response, next: NextFunction) => {
      var model = req.body as MLogin;

      if (!model.email || !model.password) {
        return res.status(400).json({
          error: "Email and password are required",
        });
      }

      var user = await User.findOne({ email: model.email });
      if (user == null) {
        return res.status(404).json({
          error: "Username or password is incorrect",
        });
      }
      if (!user.validatePassword(model.password)) {
        return res.status(400).json({
          error: "Username or password is incorrect",
        });
      }

      var session = await user.createSession(model.ispersistent);

      res.cookie("sid", session._id, {
        domain: "http://localhost:3000",
        expires: new Date(session.expires),
        httpOnly: true,
        sameSite: "none",
        secure: process.env.NODE_ENV === "production",
      });

      return res.status(200).json(session);
    }
  );

  route.post(
    "/sign-up",
    async (req: Request, res: Response, next: NextFunction) => {
      var model = req.body as MRegister;

      if (!model.email) {
        return res.status(400).json({ error: "Email is required" });
      }

      if (!model.password) {
        return res.status(400).json({ error: "Password is required" });
      }

      if (!model.name) {
        return res.status(400).json({ error: "Name is required" });
      }

      const user = await User.findOne({ email: model.email });
      if (user !== null) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const newUser = new User({
        email: model.email,
        password: model.password,
        name: model.name,
        birthDate: model.birthDate,
      });
      newUser.setPassword(model.password);
      await newUser.save();

      return res.status(200).json();
    }
  );

  route.post(
    "/logout",
    SessionHandler,
    async (req: AuthenticatableRequest, res: Response, next: NextFunction) => {
      res.clearCookie("sid");
      // return res.redirect(301, "/");
      return res.status(200).json();
    }
  );
};
