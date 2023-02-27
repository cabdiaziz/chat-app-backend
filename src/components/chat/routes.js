import express from "express";
//? import user methods from index
//? import auth method here.

const chatRoute = express.Router();

chatRoute.get("/chats");

export default chatRoute;
