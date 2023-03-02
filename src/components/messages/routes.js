import express from "express";
import { startConnection, sendHelloMessage } from "./index.js";
// import auth from "../../framework/middleware/auth.js";

export const messageRouter = () => {
  const router = express.Router();

  router.get("/messages/connect", startConnection);
  router.get("/messages/test", sendHelloMessage);

  router.get("/messages"); //get all messages
  router.post("/messages"); //save a new message

  return router;
};
