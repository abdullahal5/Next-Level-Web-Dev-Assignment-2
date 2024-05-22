import express from "express";
import { productsControllers } from "./products.controller";

const router = express.Router();

router.post("/products", productsControllers.createProduct);
router.get("/products", productsControllers.getAllProducts);
router.get("/products/:productId", productsControllers.getSingleProductById);
router.put("/products/:productId", productsControllers.updateProduct);
router.delete("/products/:productId", productsControllers.deleteProduct);

export const productRoutes = router;
