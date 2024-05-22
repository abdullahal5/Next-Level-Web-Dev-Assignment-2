import { TOrders } from "./orders.interface";
import { OrderModel } from "./orders.model";

// create data into server
const createOrdersIntoDB = async (orders: TOrders) => {
  const result = await OrderModel.create(orders);
  return result;
};

// get data from server
const GetAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

// get data by email
const GetOrdersByEmailFromDB = async (email: string) => {
  const result = await OrderModel.find({ email: email });
  return result
};

export const OrderService = {
  createOrdersIntoDB,
  GetAllOrdersFromDB,
  GetOrdersByEmailFromDB,
};
