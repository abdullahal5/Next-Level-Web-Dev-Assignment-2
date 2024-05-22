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
exports.ProductService = void 0;
const products_model_1 = require("./products.model");
// create product
const createProductsIntoDB = (products) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.create(products);
    return result;
});
// getting all data
const GetAllProductsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    let searchText = {};
    if (query) {
        const regex = new RegExp(query, "i");
        searchText = {
            $or: [
                { name: { $regex: regex } },
                { description: { $regex: regex } },
                { category: { $regex: regex } },
            ],
        };
        const result = yield products_model_1.ProductModel.find(searchText);
        return result;
    }
    else {
        const result = yield products_model_1.ProductModel.find();
        return result;
    }
});
// getting single data
const GetSingleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.findById(productId);
    return result;
});
// update product
const UpdateAProductIntoDB = (productId, updatedContent) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.findByIdAndUpdate(productId, updatedContent, { new: true });
    return result;
});
// delete product
const DeleteAProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.findByIdAndDelete(productId);
    return result;
});
exports.ProductService = {
    createProductsIntoDB,
    GetAllProductsFromDB,
    GetSingleProductFromDB,
    UpdateAProductIntoDB,
    DeleteAProductFromDB,
};
