import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
//router obj
const router = express.Router();

//routing
//register
router.post("/register", registerController);

//Login
router.post("/login", loginController);

//Testing
router.get("/test", requireSignIn, isAdmin, testController);

//protect router has auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
