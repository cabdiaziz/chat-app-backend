import express from "express";
//? import messages controller methods from index.js
// import auth from "../../framework/middleware/auth.js";

export const messageRouter = (io) => {
  const router = express.Router();

  router.get("/connect", (req, res) => {
    io.on("connection", (socket) => {
      console.log("New User Connected.. : ", socket.id);
      socket.on("disconnect", () => {
        console.log("Disconnected...! ");
      });
    });
    res.json({ message: "New User Connected to the Server" });
  });
  router.get("/test", (req, res) => {
    io.emit("newMsg", "hello client");
    console.log("Message sent from url:/test");
    res.json({ Message: "Messaged sent" });
  });

  router.get("/chats");
  return router;
};
