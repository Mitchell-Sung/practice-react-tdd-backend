import express from 'express';
import createProduct from '../controllers/ctl.createProduct.js';
import getProducts from '../controllers/ctl.getProducts.js';
import getProductById from '../controllers/ctl.getProductById.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:productId', getProductById);

export default router;
