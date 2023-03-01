import { Room } from "./index.js";

export const createNewRoom = async (room) => {
  return await Room.create(room);
};

//if you wanna to deselect field write _field-name in mongoose.
export const findAllRooms = async () => {
  return await Room.find({});
};

export const findOneRoom = async (_id) => {
  return await Room.findOne({ _id });
};
