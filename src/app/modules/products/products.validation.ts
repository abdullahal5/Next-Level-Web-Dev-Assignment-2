import Joi from "joi";

export const joiVariantsSchema = Joi.object({
  type: Joi.string().required().messages({
    "string.base": `"type" should be a type of 'text'`,
    "string.empty": `"type" cannot be an empty field`,
    "any.required": `"type" is a required field`,
  }),
  value: Joi.string().required().messages({
    "string.base": `"value" should be a type of 'text'`,
    "string.empty": `"value" cannot be an empty field`,
    "any.required": `"value" is a required field`,
  }),
});

export const joiInventorySchema = Joi.object({
  quantity: Joi.number().required().messages({
    "number.base": `"quantity" should be a type of 'number'`,
    "number.empty": `"quantity" cannot be an empty field`,
    "any.required": `"quantity" is a required field`,
  }),
  inStock: Joi.boolean().required().messages({
    "boolean.base": `"inStock" should be a type of 'boolean'`,
    "boolean.empty": `"inStock" cannot be an empty field`,
    "any.required": `"inStock" is a required field`,
  }),
});

export const joiValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": `"name" should be a type of 'text'`,
    "string.empty": `"name" cannot be an empty field`,
    "any.required": `"name" is a required field`,
  }),
  description: Joi.string().required().messages({
    "string.base": `"description" should be a type of 'text'`,
    "string.empty": `"description" cannot be an empty field`,
    "any.required": `"description" is a required field`,
  }),
  price: Joi.number().required().messages({
    "number.base": `"price" should be a type of 'number'`,
    "number.empty": `"price" cannot be an empty field`,
    "any.required": `"price" is a required field`,
  }),
  category: Joi.string().required().messages({
    "string.base": `"category" should be a type of 'text'`,
    "string.empty": `"category" cannot be an empty field`,
    "any.required": `"category" is a required field`,
  }),
  tags: Joi.array().items(Joi.string()).required().messages({
    "array.base": `"tags" should be an array`,
    "any.required": `"tags" is a required field`,
  }),
  variants: Joi.array().items(joiVariantsSchema).required().messages({
    "array.base": `"variants" should be an array`,
    "any.required": `"variants" is a required field`,
  }),
  inventory: joiInventorySchema.required().messages({
    "any.required": `"inventory" is a required field`,
  }),
});
