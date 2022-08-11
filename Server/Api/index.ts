import { Router } from "express";
import meetings from "./Routes/meetings";
import index from "./Routes/home";

export default () => {
  const app = Router();
  meetings(app);
  index(app);

  return app;
};
