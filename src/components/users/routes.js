import express from "express";
import { login, signup } from "./index.js";
import auth from "../../framework/middleware/auth.js";
//? import auth method here.

const userRoute = express.Router();

userRoute.post("/users/login", auth, login);
userRoute.post("/users/signup", signup);
userRoute.get("/users/:id");
userRoute.put("/users/:id");
userRoute.post("/users/logout");
userRoute.delete("/users/:id");

export default userRoute;
