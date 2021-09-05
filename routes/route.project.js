import express from 'express';
import createProduct from '../controllers/ctl.createProduct.js';
import getProducts from '../controllers/ctl.getProducts.js';
import getProductById from '../controllers/ctl.getProductById.js';
import updateProduct from '../controllers/ctl.updateProduct.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:productId', getProductById);
router.put('/:productId', updateProduct);

export default router;
