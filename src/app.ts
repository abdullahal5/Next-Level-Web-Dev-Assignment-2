import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/products.route";
import { orderRoutes } from "./app/modules/orders/orders.route";
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome Developers !!!");
});

// Not Found route
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Route not found");
  res.status(404);
  next(error);
});

// Error handling middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(res.statusCode || 500).json({
    success: false,
    message: error.message,
  });
});

export default app;
