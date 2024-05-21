import express from "express";
import { productsControllers } from "./products.controller";

const router = express.Router();

router.post("/products", productsControllers.createProduct);
router.get("/products", productsControllers.getAllProducts)

export const productRoutes = router;