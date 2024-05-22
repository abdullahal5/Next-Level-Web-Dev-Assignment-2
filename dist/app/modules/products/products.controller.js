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
exports.productsControllers = void 0;
const products_service_1 = require("./products.service");
// create controller
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield products_service_1.ProductService.createProductsIntoDB(body);
        res.status(200).json({
            success: true,
            message: "Product Created Successfylly",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Occured While Creating New Product",
            error: error,
        });
    }
});
// get all product controller
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_service_1.ProductService.GetAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Product Fetched Successfylly",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Occured While Getting All Product",
            error: error,
        });
    }
});
// single product controller
const getSingleProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield products_service_1.ProductService.GetSingleProductFromDB(id);
        res.status(200).json({
            success: true,
            message: "Product Fetched Successfylly",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Occured While Getting Single Product",
            error: error,
        });
    }
});
exports.productsControllers = {
    createProduct,
    getAllProducts,
    getSingleProductById,
};
