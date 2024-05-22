"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_route_1 = require("./app/modules/products/products.route");
const orders_route_1 = require("./app/modules/orders/orders.route");
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use("/api", products_route_1.productRoutes);
app.use("/api", orders_route_1.orderRoutes);
app.get("/", (req, res) => {
    res.send("Welcome Developers !!!");
});
// Not Found route
app.use((req, res, next) => {
    const error = new Error("Route not found");
    res.status(404);
    next(error);
});
// Error handling middleware
app.use((error, req, res, next) => {
    res.status(res.statusCode || 500).json({
        success: false,
        message: error.message,
    });
    next();
});
exports.default = app;
