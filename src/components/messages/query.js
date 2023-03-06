import { Message } from "./index.js";
import { User } from "../users/index.js";

export const createNewMsg = async ({ message, room, user }) => {
  const newMessage = { message };
  return await Message.create({ messages: newMessage, room, user });
};
export const findAllMessages = async (user) => {
  return await Message.find({ user });
};
export const findMessageRoom = async (room, user) => {
  return await Message.find({ room, user });
};
export const updateMessages = async (room, user, updateMessage) => {
  return await Message.findOneAndUpdate(
    { room: room, user: user },
    {
      $push: { messages: { message: updateMessage } },
    },
    {
      new: true,
      upsert: true,
    }
  );
};

// USER :  find user by uid firebase id
export const findUserByUid = async (uid) => {
  return await User.findOne({ uid });
};
