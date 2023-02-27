import express from "express";
//? import user methods from index
//? import auth method here.

const userRoute = express.Router();

userRoute.post("/users/login");
userRoute.post("/users/register");
userRoute.get("/users/:id");
userRoute.put("/users/:id");
userRoute.post("/users/logout");
userRoute.delete("/users/:id");

export default userRoute;
