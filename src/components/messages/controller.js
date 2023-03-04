// startConnection();  sendHelloMessage();
import { io } from "../../../server.js";
import {
  saveMessageService,
  findAllMessages,
  getAllMsgService,
  createNewMsg,
  findUserByEmail,
} from "./index.js";
import apiErrorHandler from "../../framework/middleware/apiErrorHandler.js";

export const startConnection = (req, res) => {
  try {
    io.on("connection", (socket) => {
      console.log("New user connected.. : ", socket.id);
      socket.on("disconnect", () => {
        console.log("Disconnected...! ");
      });
    });
    res.json({ message: "New User Connected" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const saveMessage = async (req, res) => {
  try {
    const { message, room, email } = req.body;

    const user = req.user.uid;
    const data = { message, room, email, user };

    //send msg socket.io
    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log(`userID : ${socket.id} joined room: ${room}`);
    });

    socket.on("sendMessage", (data) => {
      socket.to(data.room).emit("receiveMessage", data);
    });

    const newMsg = await saveMessageService(
      { createNewMsg, findUserByEmail, apiErrorHandler },
      { data }
    );

    if (newMsg.code !== 400) return res.status(201).json(newMsg);
    return res.status(newMsg.code).json({ message: newMsg.message });
  } catch (err) {
    console.log("Err = ", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const { email } = await req.user;
    const allMsg = await getAllMsgService({ findAllMessages }, { email });
    return res.status(200).json(allMsg);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const sendHelloMessage = (req, res) => {
  try {
    io.emit("newMsg", "Hello client");
    console.log("Message sent from url:/test");
    res.json({ Message: "Messaged sent" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
