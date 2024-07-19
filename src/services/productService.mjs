import * as productDAL from "../dal/productRepository.mjs"

export const createProduct = async (productData) => {
  try {
    const product = await productDAL.createProduct(productData);
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllProducts = async () => {
  try {
    const products = await productDAL.getAllProducts();
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductById = async (productId) => {
  try {
    const product = await productDAL.getProductById(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProduct = async (productId, newData) => {
  try {
    const updatedProduct = await productDAL.updateProduct(productId, newData);
    if (!updatedProduct) {
      throw new Error('Product not found');
    }
    return updatedProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async (productId) => {
  try {
    const deletedProduct = await productDAL.deleteProduct(productId);
    if (!deletedProduct) {
      throw new Error('Product not found');
    }
    return deletedProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};
