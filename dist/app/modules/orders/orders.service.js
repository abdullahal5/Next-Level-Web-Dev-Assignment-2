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
exports.OrderService = void 0;
const orders_model_1 = require("./orders.model");
// create data into server
const createOrdersIntoDB = (orders) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.OrderModel.create(orders);
    return result;
});
// get data from server
const GetAllOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const result = yield orders_model_1.OrderModel.findOne({ email: email });
        return result;
    }
    else {
        const result = yield orders_model_1.OrderModel.find();
        return result;
    }
});
exports.OrderService = {
    createOrdersIntoDB,
    GetAllOrdersFromDB,
};
