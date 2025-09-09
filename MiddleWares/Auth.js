import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

export const authMiddleware = async (req, res, next) => {
  try {
    
    const token = req.header('Auth')

  console.log("Check token =", token);

  if(!token)
    return res.json({message : "Login first" , success : false});

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const id = decoded.userId;

    //console.log("Id"+id);
    let user = await User.findById(id);
     //   console.log("user"+user);

    if (!user) {
      return res.status(401).json({message : "User not found, authorization denied", success : false});
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({message : error.message, success : false});
  }

}