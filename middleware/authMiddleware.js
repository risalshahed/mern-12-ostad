import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  // '111 2 3'.split(' ') = [111,2,3]
  let token;

  // Token from Authorization Header
  if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if(!token) return res.status(401).json({ message: 'Not Authorized, No Token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(req.user);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Not Authorized, Token Failed" });
  }
}