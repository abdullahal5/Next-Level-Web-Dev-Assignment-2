import { TProducts } from "./products.interface";
import { ProductModel } from "./products.model";

// create product
const createProductsIntoDB = async (products: TProducts) => {
  const result = await ProductModel.create(products);
  return result;
};

// getting all data
const GetAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// getting single data
const GetSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

// update product
const UpdateAProductIntoDB = async (
  productId: string,
  updatedContent: object,
) => {
  const result = await ProductModel.findByIdAndUpdate(
    productId,
    updatedContent,
    { new: true },
  );
  return result
};

// delete product
const DeleteAProductFromDB = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId);
  return result;
};

export const ProductService = {
  createProductsIntoDB,
  GetAllProductsFromDB,
  GetSingleProductFromDB,
  UpdateAProductIntoDB,
  DeleteAProductFromDB,
};
