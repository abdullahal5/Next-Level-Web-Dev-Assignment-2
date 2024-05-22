"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const orders_service_1 = require("./orders.service");
const products_model_1 = require("../products/products.model");
const orders_validation_1 = require("./orders.validation");
// create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const { error, value } = orders_validation_1.joiOrderValidationSchema.validate(body, {
            convert: false,
        });
        if (error) {
            return res.status(404).json({
                success: false,
                message: error === null || error === void 0 ? void 0 : error.message,
            });
        }
        // Create the order
        const result = yield orders_service_1.OrderService.createOrdersIntoDB(value);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found",
            });
        }
        // Find the product to check inventory
        const product = yield products_model_1.ProductModel.findOne({
            _id: result.productId,
        });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        // Check if the inventory is sufficient
        if (product.inventory.quantity < result.quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }
        // Update the product inventory
        yield products_model_1.ProductModel.findOneAndUpdate({ _id: result.productId }, { $inc: { "inventory.quantity": -result.quantity } });
        // Get the updated product to set the inStock status
        const updatedProduct = yield products_model_1.ProductModel.findOne({
            _id: result.productId,
        });
        // Set the inStock status
        yield products_model_1.ProductModel.findByIdAndUpdate(result.productId, {
            $set: {
                "inventory.inStock": updatedProduct && updatedProduct.inventory.quantity <= 0
                    ? false
                    : true,
            },
        });
        return res.status(200).json({
            success: true,
            message: "Order Created Successfully",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error Occurred While Creating New Order",
            error: error,
        });
    }
});
// get all order
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result;
        const email = req.query.email;
        if (email) {
            result = yield orders_service_1.OrderService.GetAllOrdersFromDB(email);
        }
        else {
            result = yield orders_service_1.OrderService.GetAllOrdersFromDB();
        }
        if (!result) {
            res.status(404).json({
                success: false,
                message: "Order Not Found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Occurred While Getting All Orders",
            error: error,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrders,
};
