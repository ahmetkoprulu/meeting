import { Router } from "express";
import meeting from "./Routes/meeting";

export default () => {
  const app = Router();
  meeting(app);

  return app;
};
