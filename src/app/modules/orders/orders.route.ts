import express from "express";
import { OrderControllers } from "./orders.controller";

const router = express.Router();

router.post("/orders", OrderControllers.createOrder);
router.get("/orders", OrderControllers.getAllOrders)
router.get("/orders", OrderControllers.getOrderByEmail)

export const orderRoutes = router
