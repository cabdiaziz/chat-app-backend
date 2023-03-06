import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    messages: { type: Array, default: [] },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("messages", messageSchema);
export default Message;
