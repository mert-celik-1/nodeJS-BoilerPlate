import express from 'express';
import { addProductValidator } from '../validations/productValidator.mjs';
import validateModel from '../validations/index.mjs';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController.mjs';
import { protect } from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.post('/', addProductValidator,protect, validateModel, createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
