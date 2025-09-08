import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import { config } from "dotenv";
import userRouter from "./Routes/User.js";

const app = express();

app.use(bodyParser.json());

// User Routes
app.use("/api/user", userRouter);

// .env setup
config({path : './.env'});


// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to E-Commerce App" });
});

mongoose
  .connect(
    process.env.MONGODB_URL,
    {
      dbName: "Ecommerce_App",
    }
  )
  .then(() => console.log("Connected to E-CommerceApp Database"))
  .catch((err) => console.log("Database connection error:", err));

  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
