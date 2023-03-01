import express from "express";
//? import chatRoom controller method from index
// import auth from "../../framework/middleware/auth.js";

export const roomRouter = () => {
  const router = express.Router();

  router.get("/rooms"); // find all rooms
  router.get("/rooms/:id"); //find one room by id
  router.post("/rooms"); // create a new room

  return router;
};
