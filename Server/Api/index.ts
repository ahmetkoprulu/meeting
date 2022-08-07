import { Router } from "express";
import meeting from "./Routes/meetings";

export default () => {
  const app = Router();
  meeting(app);

  return app;
};
