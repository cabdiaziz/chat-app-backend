import express from "express";
import auth from "../../framework/middleware/auth.js";
import { getAllRooms, createRoom } from "index.js";

export const roomRouter = () => {
  const router = express.Router();

  router.get("/rooms", auth, getAllRooms); // view all rooms
  router.post("/rooms", auth, createRoom); // generate a new room

  return router;
};
