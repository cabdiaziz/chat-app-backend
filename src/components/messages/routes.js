import express from "express";
import { startConnection, saveMessage, getAllMessages } from "./index.js";
import auth from "../../framework/middleware/auth.js";

export const messageRouter = () => {
  const router = express.Router();

  router.get("/messages/connect", auth, startConnection);

  router.post("/messages", auth, saveMessage); //create new message
  router.get("/messages", auth, getAllMessages); //get only my messages

  return router;
};
