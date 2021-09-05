import express from 'express';
import createProduct from '../controllers/ctl.createProduct.js';
import getProducts from '../controllers/ctl.getProducts.js';
import getProductById from '../controllers/ctl.getProductById.js';
import updateProduct from '../controllers/ctl.updateProduct.js';
import deleteProduct from '../controllers/ctl.deleteProduct.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:productId', getProductById);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);

export default router;
