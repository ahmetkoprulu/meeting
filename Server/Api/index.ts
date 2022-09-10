import { Router } from "express";
import meetings from "./Routes/meetings";
import index from "./Routes/home";
import users from "./Routes/users";

export default () => {
  const app = Router();
  meetings(app);
  index(app);
  users(app);

  return app;
};
