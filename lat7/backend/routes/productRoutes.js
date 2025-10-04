const express = require('express');
const productController = require('../controllers/productControllers');
const productMiddleware = require('../middleware/productMiddleware');
const router = express.Router();

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.post('/', productMiddleware.validateProductData, productController.createProduct)
router.put('/:id', productMiddleware.validateProductData, productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router;
