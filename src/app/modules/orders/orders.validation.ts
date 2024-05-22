import Joi from "joi";

export const joiOrderValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": `"email" should be a type of 'text'`,
    "string.email": `"email" must be a valid email`,
    "string.empty": `"email" cannot be an empty field`,
    "any.required": `"email" is a required field`,
  }),
  productId: Joi.string().required().messages({
    "string.base": `"productId" should be a type of 'text'`,
    "string.empty": `"productId" cannot be an empty field`,
    "any.required": `"productId" is a required field`,
  }),
  price: Joi.number().required().messages({
    "number.base": `"price" should be a type of 'number'`,
    "number.empty": `"price" cannot be an empty field`,
    "any.required": `"price" is a required field`,
  }),
  quantity: Joi.number().required().messages({
    "number.base": `"quantity" should be a type of 'number'`,
    "number.empty": `"quantity" cannot be an empty field`,
    "any.required": `"quantity" is a required field`,
  }),
});
