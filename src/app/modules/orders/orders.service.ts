import { TOrders } from "./orders.interface";
import { OrderModel } from "./orders.model";

// create data into server
const createOrdersIntoDB = async (orders: TOrders) => {
  const result = await OrderModel.create(orders);
  return result;
};

// get data from server
const GetAllOrdersFromDB = async (email?: string) => {
  if (email) {
    const result = await OrderModel.find({ email });
    return result;
  } else {
    const result = await OrderModel.find();
    return result;
  }
};

export const OrderService = {
  createOrdersIntoDB,
  GetAllOrdersFromDB,
};
