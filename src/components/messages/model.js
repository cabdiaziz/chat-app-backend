import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    roomName: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "room",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Chatroom is required!",
      ref: "User",
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("messages", messageSchema);
export default Message;
