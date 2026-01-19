import express from "express";
import { getOrders, addOrder } from "../controllers/order.controller.js";
const router = express.Router();

router.get("/", getOrders);
router.post("/", addOrder);

export default router;
