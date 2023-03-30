import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import formidable from "express-formidable";
const router = express.Router();

//Routes
router.post(
  "/add-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//Get products
router.get("/get-product", getProductController);

//Get 1 product
router.get("/get-product/:slug", getSingleController);

//get product photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/product/:pid", deleteProductController);
export default router;