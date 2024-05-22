import { Schema, model } from "mongoose";
import { TInvetory, TProducts, TVariants } from "./products.interface";

const VariantsSchema = new Schema<TVariants>(
  {
    type: String,
    value: String,
  },
  { _id: false },
);

const InvetorySchema = new Schema<TInvetory>(
  {
    quantity: Number,
    inStock: Boolean,
  },
  { _id: false },
);

const ProductsSchema = new Schema<TProducts>({
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

export const ProductModel = model<TProducts>("Product", ProductsSchema);
