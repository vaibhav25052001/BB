import express from "express";
import {
  currentUserController,
  loginController,
  registerController,
} from "../controller/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

//register routes
router.post("/register", registerController);

//current user
router.get("/current-user", requireSignIn, currentUserController);

//login
router.post("/login", loginController);
export default router;
