import {
  findAllRooms,
  getRoomsService,
  createNewRoom,
  newRoomService,
} from "./index.js";
import apiErrorHandler from "../../framework/middleware/apiErrorHandler.js";

export const getAllRooms = async (req, res) => {
  try {
    const allRooms = await getRoomsService({ findAllRooms });
    return res.status(200).json(allRooms);
  } catch (err) {
    console.log("Error = ", err.message);
    return res.status(400).json({ message: err.message });
  }
};

export const createRoom = async (req, res) => {
  try {
    const { name } = req.body;

    const newRoom = await newRoomService(
      { createNewRoom, apiErrorHandler },
      { name }
    );

    if (newRoom.code !== 400) return res.status(201).json(newRoom); //if true
    return res.status(newRoom.code).json({ message: newRoom.message }); //if false
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
