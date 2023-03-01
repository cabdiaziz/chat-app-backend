//? user auth here.
import admin from "../firebase/firebase-config.js";

const auth = async (req, res, next) => {
  try {
    console.log("authz=", req.headers.authorization);
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];

      const decodeToken = await admin.auth().verifyIdToken(token);
      if (decodeToken) {
        req.user = decodeToken;
        return next();
      }
      return res.status(401).json({ msg: "Unauthorized !" });
    }
    return res.status(401).json({ msg: "Unauthorized !" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export default auth;
