import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import connectMongoDB from "./src/framework/config/db.js";
import { userRoute } from "./src/components/users/index.js";
import { messageRouter } from "./src/components/messages/index.js";

const app = express();
const server = createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

dotenv.config();
connectMongoDB();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1", messageRouter());

const port = process.env.PORT || 7000;

server.listen(port, () => {
  console.log("This server is running on http://localhost:7000");
});
