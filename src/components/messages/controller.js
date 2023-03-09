// startConnection();
import { io } from "../../../server.js";
import {
  saveMessageService,
  findAllMessages,
  getAllMsgService,
  createNewMsg,
  findUserByUid,
  findMessageRoom,
  updateMessages,
} from "./index.js";
import apiErrorHandler from "../../framework/middleware/apiErrorHandler.js";

export const saveMessage = async (req, res) => {
  try {
    const { message, room } = req.body.data;

    const userId = await findUserByUid(req.user.uid);
    const user = userId._id;

    const data = { message, room, user };
    console.log("body=", data);

    const newMsg = await saveMessageService(
      { createNewMsg, findMessageRoom, updateMessages, apiErrorHandler },
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
    const user = await findUserByUid(req.user.uid);
    console.log("GET : user_DB_ID =", user._id);
    const userId = user._id;

    const allMsg = await getAllMsgService({ findAllMessages }, { userId });
    console.log("All = ", allMsg);
    return res.status(200).json(allMsg);
  } catch (err) {
    console.log("Error: ", err.message);
    return res.status(400).json({ message: err.message });
  }
};
