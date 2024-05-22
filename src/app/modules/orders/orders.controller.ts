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
    let result;
    const email = req.query.email as string;

    if (email) {
      result = await OrderService.GetAllOrdersFromDB(email);
    } else {
      result = await OrderService.GetAllOrdersFromDB();
    }

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

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
