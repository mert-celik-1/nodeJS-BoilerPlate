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
