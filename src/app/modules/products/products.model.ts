import { Schema, model } from "mongoose";
import { TInvetory, TProducts, TVariants } from "./products.interface";

const VariantsSchema = new Schema<TVariants>({
  type: String,
  value: String,
});

const InvetorySchema = new Schema<TInvetory>({
  quantity: Number,
  inStock: Boolean,
});

const ProductsSchema = new Schema<TProducts>({
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
  tags: {
    type: [String],
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

export const ProductModel = model<TProducts>("Product", ProductsSchema);
