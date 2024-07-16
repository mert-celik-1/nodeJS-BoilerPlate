import { body } from "express-validator";

export const addProductValidator = [
    body('name').notEmpty().withMessage('Ürün adı gereklidir.'),
    body('price').isFloat({ gt: 0 }).withMessage('Fiyat pozitif bir sayı olmalıdır.'),
    body('description').optional().isString().withMessage('Açıklama bir string olmalıdır.'),
    body('inStock').optional().isBoolean().withMessage('Stok durumu bir boolean olmalıdır.')
];
