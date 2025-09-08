import express from "express";
import { login, register } from "../Controllers/User.js";
const router = express.Router();


// Regster Route
// POST Request
// @api /api/user/register
router.post("/register", register);

// Login Route
// POST Request
// @api /api/user/login
router.post("/login", login);

export default router;