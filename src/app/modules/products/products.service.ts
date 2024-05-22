import { TProducts } from "./products.interface";
import { ProductModel } from "./products.model";

// create product
const createProductsIntoDB = async (products: TProducts) => {
  const result = await ProductModel.create(products);
  return result;
};

// getting all data
const GetAllProductsFromDB = async (query?: string) => {
  try {
    let searchText = {};

    if (query) {
      const regex = new RegExp(query, "i");
      
      searchText = {
        $or: [
          { name: { $regex: regex } },
          { description: { $regex: regex } },
          { category: { $regex: regex } },
        ],
      };
      
      const result = await ProductModel.find(searchText);
      return result;
    }
    const result = await ProductModel.find();
    return result;
  } catch (error) {
    return error;
  }
};

// getting single data
const GetSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

// update product
const UpdateAProductIntoDB = async (
  productId: string,
  updatedContent: Partial<TProducts>,
) => {
  const result = await ProductModel.findByIdAndUpdate(
    productId,
    updatedContent,
    { new: true },
  );
  return result;
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
