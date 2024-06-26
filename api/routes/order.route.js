import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/:id", verifyToken, createOrder);
router.get("/:userId", verifyToken, getOrders);

export default router;
