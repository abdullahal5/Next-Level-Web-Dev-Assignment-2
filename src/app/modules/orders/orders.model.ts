import { Schema, model } from "mongoose";
import { TOrders } from "./orders.interface";

const OrderSchema = new Schema<TOrders>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const OrderModel = model<TOrders>("Order", OrderSchema);
