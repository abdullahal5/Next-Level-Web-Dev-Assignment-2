import { Request, Response } from "express";
import { ProductService } from "./products.service";
import { joiValidationSchema } from "./products.validation";

// create controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const { error, value } = joiValidationSchema.validate(body, {
      convert: false,
    });

    if (error) {
      return res.status(404).json({
        success: false,
        message: error?.message,
      });
    }

    const result = await ProductService.createProductsIntoDB(value);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

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
    const searchQuery = (req.query.searchTerm as string) || "";
    let result;

    if (searchQuery) {
      result = await ProductService.GetAllProductsFromDB(searchQuery);
    } else {
      result = await ProductService.GetAllProductsFromDB();
    }

    if (!result || result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occurred While Getting All Products",
      error: error,
    });
  }
};

// single product controller
const getSingleProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.GetSingleProductFromDB(productId);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

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
    const { error, value } = joiValidationSchema.validate(updatedContent, {
      convert: false,
    });

    if (error) {
      return res.status(404).json({
        success: false,
        message: error?.message,
      });
    }

    const result = await ProductService.UpdateAProductIntoDB(productId, value);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

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
