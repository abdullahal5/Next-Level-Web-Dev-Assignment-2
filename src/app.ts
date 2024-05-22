import express, { Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/products.route";
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome Developers !!!");
});

export default app;
