import { Request, Response } from "express";
import { OrderService } from "./orders.service";

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const result = await OrderService.createOrdersIntoDB(body);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order Created Successfylly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occured While Creating New Order",
      error: error,
    });
  }
};

// get all order
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.GetAllOrdersFromDB();

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occurred While Getting All Orders",
      error: error,
    });
  }
};

// get order by email
const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const result = await OrderService.GetOrdersByEmailFromDB(email);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occurred While Getting All Orders By Email",
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};
