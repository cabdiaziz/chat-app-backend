import { User } from "./index.js";

export const createNewUser = async (user) => {
  return await User.create(user);
};

//if you wanna to deselect field write _field-name into the select method.
export const findAllUsers = async () => {
  return await User.find({}).select("name email phone");
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const findUserById = async (_id) => {
  return await User.findOne({ _id });
};

export const findAndUpdateUser = async (user) => {
  const { _id } = user;
  const { name, phone } = user;
  return await Task.findByIdAndUpdate(
    _id,
    { $set: { isCompleted } },
    { new: true }
  ).select("name email phone");
};
