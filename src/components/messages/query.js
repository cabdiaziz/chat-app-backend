import { Message } from "./index.js";
import { User } from "../users/index.js";
export const createNewMsg = async ({ message, room, email, user }) => {
  return await Message.create({ message, room, email, user });
};

export const findAllMessages = async (email) => {
  return await Message.find({ email }).select("message room email");
};

// user methods
export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
