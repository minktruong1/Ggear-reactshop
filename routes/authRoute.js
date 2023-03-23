import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authControllers.js";

//router obj
const router = express.Router();

//routing
//register
router.post("/register", registerController);

//Login
router.post("/login", loginController);

export default router;
