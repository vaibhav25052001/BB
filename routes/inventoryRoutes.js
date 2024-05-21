import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";
import {
  createInventoryController,
  getInventoryController,
} from "../controller/inventoryController.js";
const router = express.Router();

//inventory
router.post("/create-inventory", requireSignIn, createInventoryController);

//get all blood records
router.get("/get-inventory", requireSignIn, getInventoryController);

export default router;
