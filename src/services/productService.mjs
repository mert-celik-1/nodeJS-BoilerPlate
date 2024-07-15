import * as productDAL from "../dal/productRepository.mjs"

export const createProduct = async (productData) => {
    return await productDAL.createProduct(productData);
};

export const getAllProducts = async () => {
    return await productDAL.getAllProducts();
};

export const getProductById = async (productId) => {
    return await productDAL.getProductById(productId);
};

export const updateProduct = async (productId, newData) => {
    return await productDAL.updateProduct(productId, newData);
};

export const deleteProduct = async (productId) => {
    return await productDAL.deleteProduct(productId);
};