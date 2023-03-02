// startConnection();  sendHelloMessage();
import { io } from "../../../server.js";
export const startConnection = (req, res) => {
  try {
    io.on("connection", (socket) => {
      console.log("New User Connected.. : ", socket.id);
      socket.on("disconnect", () => {
        console.log("Disconnected...! ");
      });
    });
    res.json({ message: "New User Connected" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const sendHelloMessage = (req, res) => {
  try {
    io.emit("newMsg", "Hello client");
    console.log("Message sent from url:/test");
    res.json({ Message: "Messaged sent" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
