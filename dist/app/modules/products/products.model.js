"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const VariantsSchema = new mongoose_1.Schema({
    type: String,
    value: String,
}, { _id: false });
const InvetorySchema = new mongoose_1.Schema({
    quantity: Number,
    inStock: Boolean,
}, { _id: false });
const ProductsSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    tags: {
        type: [String],
    },
    variants: {
        type: [VariantsSchema],
    },
    inventory: {
        type: InvetorySchema,
    },
});
exports.ProductModel = (0, mongoose_1.model)("Product", ProductsSchema);
