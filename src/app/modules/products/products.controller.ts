import { Request, Response } from "express";
import { ProductService } from "./products.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const result = await ProductService.createProductsIntoDB(body);

    res.status(200).json({
      success: true,
      message: "Product Created Successfylly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occured While Creating New Product",
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) =>{
  try {
    const result = await ProductService.GetAllProductsFromDB()

    res.status(200).json({
      success: true,
      message: "Product Fetched Successfylly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occured While Getting All Product",
      error: error,
    });
  }
}

export const productsControllers = {
  createProduct,
  getAllProducts,
};