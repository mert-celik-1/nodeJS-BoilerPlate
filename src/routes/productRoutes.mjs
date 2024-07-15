import express from 'express';
import Product from '../models/Product.mjs';

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Yeni bir ürün oluşturur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               inStock:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Ürün başarıyla oluşturuldu
 *       '400':
 *         description: Geçersiz istek
 *       '500':
 *         description: Sunucu hatası
 */
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Tüm ürünleri getirir
 *     responses:
 *       '200':
 *         description: Başarıyla tüm ürünler getirildi
 *       '500':
 *         description: Sunucu hatası
 */
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Belirli bir ürünü getirir
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ürün ID'si
 *     responses:
 *       '200':
 *         description: Başarıyla ürün getirildi
 *       '404':
 *         description: Ürün bulunamadı
 *       '500':
 *         description: Sunucu hatası
 */
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Belirli bir ürünü günceller
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ürün ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               inStock:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Ürün başarıyla güncellendi
 *       '400':
 *         description: Geçersiz istek
 *       '404':
 *         description: Ürün bulunamadı
 *       '500':
 *         description: Sunucu hatası
 */
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Belirli bir ürünü siler
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ürün ID'si
 *     responses:
 *       '200':
 *         description: Ürün başarıyla silindi
 *       '404':
 *         description: Ürün bulunamadı
 *       '500':
 *         description: Sunucu hatası
 */
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
