import { Request, Response } from "express";
import { ProductService } from "./products.service";

// create controller
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

// get all product controller
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.GetAllProductsFromDB();

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
};

// single product controller
const getSingleProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.GetSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product Fetched Successfylly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occured While Getting Single Product",
      error: error,
    });
  }
};

// update product controller
const updateProduct = async (req: Request, res: Response) => {
  const updatedContent = req.body;
  const productId = req.params.productId;
  try {
    const result = await ProductService.UpdateAProductIntoDB(
      productId,
      updatedContent,
    );

    res.status(200).json({
      success: true,
      message: "Product Updated Successfylly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occured While Updating A Product",
      error: error,
    });
  }
};

// delete product controller
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await ProductService.DeleteAProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted Successfylly",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occured While Deleting A Product",
      error: error,
    });
  }
};

export const productsControllers = {
  createProduct,
  getAllProducts,
  getSingleProductById,
  updateProduct,
  deleteProduct,
};
