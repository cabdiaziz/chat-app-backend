import express from "express";
import { saveMessage, getAllMessages } from "./index.js";
import auth from "../../framework/middleware/auth.js";

export const messageRouter = () => {
  const router = express.Router();

  router.post("/messages", auth, saveMessage);
  router.get("/messages", auth, getAllMessages);
  return router;
};
