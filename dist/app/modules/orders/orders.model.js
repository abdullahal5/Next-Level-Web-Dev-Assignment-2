"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    email: {
        type: String,
    },
    productId: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
});
exports.OrderModel = (0, mongoose_1.model)("Order", OrderSchema);
