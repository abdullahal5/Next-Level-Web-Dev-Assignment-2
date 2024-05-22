import { Request, Response } from "express";
import { OrderService } from "./orders.service";
import { ProductModel } from "../products/products.model";
import { joiOrderValidationSchema } from "./orders.validation";

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const { error, value } = joiOrderValidationSchema.validate(body, {
      convert: false,
    });

    if (error) {
      return res.status(404).json({
        success: false,
        message: error?.message,
      });
    }

    // Create the order
    const result = await OrderService.createOrdersIntoDB(value);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    // Find the product to check inventory
    const product = await ProductModel.findOne({
      _id: result.productId,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Check if the inventory is sufficient
    if (product.inventory.quantity < result.quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    // Update the product inventory
    await ProductModel.findOneAndUpdate(
      { _id: result.productId },
      { $inc: { "inventory.quantity": -result.quantity } },
    );

    // Get the updated product to set the inStock status
    const updatedProduct = await ProductModel.findOne({
      _id: result.productId,
    });

    // Set the inStock status
    await ProductModel.findByIdAndUpdate(result.productId, {
      $set: {
        "inventory.inStock":
          updatedProduct && updatedProduct.inventory.quantity <= 0
            ? false
            : true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Order Created Successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Occurred While Creating New Order",
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
