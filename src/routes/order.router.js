import { Router } from "express";
import { createOrder, getOrderById, getOrders, resolveOrder } from "../controllers/order.controller.js"

const router = Router()

router.get("/", getOrders)
router.get("/:id", getOrderById)
router.post("/", createOrder)
router.post("/:id", resolveOrder)


export default router 