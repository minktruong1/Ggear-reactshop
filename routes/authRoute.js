import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
//router obj
const router = express.Router();

//routing
//register POST
router.post("/register", registerController);

//Login POST
router.post("/login", loginController);

//Forgot Password POST
router.post("/forgot-password", forgotPasswordController);

//Testing
router.get("/test", requireSignIn, isAdmin, testController);

//protect user router has auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protect admin router has auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders list
router.get("/orders", requireSignIn, getOrdersController);

//admin orders control
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//update order status
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
