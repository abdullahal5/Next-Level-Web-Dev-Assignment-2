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
// create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield orders_service_1.OrderService.createOrdersIntoDB(body);
        if (!result) {
            res.status(404).json({
                success: false,
                message: "Order Not Found",
            });
        }
        yield products_model_1.ProductModel.findOneAndUpdate({ _id: result.productId }, { $inc: { "inventory.quantity": -result.quantity } });
        const updatedProduct = yield products_model_1.ProductModel.findOne({
            _id: result.productId,
        });
        yield products_model_1.ProductModel.findByIdAndUpdate(result.productId, {
            $set: {
                "inventory.inStock": updatedProduct && updatedProduct.inventory.quantity <= 0
                    ? false
                    : true,
            },
        });
        res.status(200).json({
            success: true,
            message: "Order Created Successfylly",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Occured While Creating New Order",
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
