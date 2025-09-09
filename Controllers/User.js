import { User} from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User
export const register = async (req, res) => {

  const { name, email, password } = req.body;

  let user = await User.findOne({ email});
  if (user) {
    return res.status(400).json({ message: "User already exists" , success : false});
  }

  const hashedPassword = await bcrypt.hash(password, 10); 

  user = await User.create({
    name, email,
    password: hashedPassword,
  })
  res.status(201).json({ message: "User registered successfully", success: true });
};


//  Login User

export const login = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if(!user){
    return res.status(400).json({ message: "User does not exist" , success : false});
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials", success: false });
  }

  const token = jwt.sign ({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.status(200).json({ message: "User logged in successfully", token, success: true });
}