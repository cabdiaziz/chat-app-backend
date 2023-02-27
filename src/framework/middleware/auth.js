//? user auth here.
import admin from "../firebase/firebase-config.js";

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    //* decoding user token
    const decodeToken = await admin.auth().verifyIdToken(token);
    if (decodeToken) {
      return next();
    }
    return res.status(401).json({ msg: "Unauthorized !" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Error" });
  }
};

export default auth;
