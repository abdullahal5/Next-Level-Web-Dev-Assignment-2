"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiOrderValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.joiOrderValidationSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        "string.base": `"email" should be a type of 'text'`,
        "string.email": `"email" must be a valid email`,
        "string.empty": `"email" cannot be an empty field`,
        "any.required": `"email" is a required field`,
    }),
    productId: joi_1.default.string().required().messages({
        "string.base": `"productId" should be a type of 'text'`,
        "string.empty": `"productId" cannot be an empty field`,
        "any.required": `"productId" is a required field`,
    }),
    price: joi_1.default.number().required().messages({
        "number.base": `"price" should be a type of 'number'`,
        "number.empty": `"price" cannot be an empty field`,
        "any.required": `"price" is a required field`,
    }),
    quantity: joi_1.default.number().required().messages({
        "number.base": `"quantity" should be a type of 'number'`,
        "number.empty": `"quantity" cannot be an empty field`,
        "any.required": `"quantity" is a required field`,
    }),
});
