//? this schema needs a validation
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    uid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, default: 25261 },
    role: {
      type: String,
      enum: ["superAdmin", "admin", "user"],
      default: "user",
    },
    status: { type: String, enum: ["active", "blocked"], default: "active" },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("myMessages", {
  ref: "messages", //relation model name or reference
  localField: "_id", //where is the relation position is id (_id)
  foreignField: "user", // relationship collection column name is (user)
});

const User = mongoose.model("users", userSchema);
export default User;
