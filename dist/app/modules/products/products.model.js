"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const VariantsSchema = new mongoose_1.Schema({
    type: String,
    value: String,
});
const InvetorySchema = new mongoose_1.Schema({
    quantity: Number,
    inStock: Boolean,
});
const ProductsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    variants: {
        type: [VariantsSchema],
        required: true,
    },
    inventory: {
        type: InvetorySchema,
        required: true,
    },
});
exports.ProductModel = (0, mongoose_1.model)("Product", ProductsSchema);
