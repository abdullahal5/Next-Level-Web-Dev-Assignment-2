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

export const ProductService = {
  createProductsIntoDB,
  GetAllProductsFromDB,
};
