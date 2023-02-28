import {
  findUserByEmail,
  createNewUser,
  createUserService,
  loginUserService,
} from "./index.js";
import apiErrorHandler from "../../framework/middleware/apiErrorHandler.js";

export const login = async (req, res) => {
  try {
    const { email } = req.user.email;

    const user = await loginUserService(
      { findUserByEmail, apiErrorHandler },
      { email }
    );
    if (user.code !== 401) return res.status(200).json(user);
    return res.status(user.code).json({ message: user.message });
  } catch (err) {
    console.log("Err=", err.message);
    res.status(500).json({ message: err.message });
  }
};
export const signup = async (req, res) => {
  try {
    const { name, email, uid } = req.body.user;
    const user = await createUserService(
      {
        findUserByEmail,
        createNewUser,
        apiErrorHandler,
      },
      { uid, name, email }
    );
    if (user.code !== 400) return res.status(201).json(user);
    return res.status(user.code).json({ message: user.message });
  } catch (err) {
    console.log("Err = ", err.message);
    res.status(500).json({ message: err.message });
  }
};
