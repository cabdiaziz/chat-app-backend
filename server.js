import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectMongoDB from "./src/framework/config/db.js";
import { userRoute } from "./src/components/users/index.js";
import { chatRoute } from "./src/components/chat/index.js";

const app = express();
dotenv.config();
connectMongoDB();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1", chatRoute);

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log("This app is running on http://localhost:7000");
});
