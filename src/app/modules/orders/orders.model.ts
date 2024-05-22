import { Schema, model } from "mongoose";
import { TOrders } from "./orders.interface";

const OrderSchema = new Schema<TOrders>({
  email: {
    type: String,
  },
  productId: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

export const OrderModel = model<TOrders>("Order", OrderSchema);
