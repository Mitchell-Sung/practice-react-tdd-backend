import express from 'express';
import createProduct from '../controllers/ctl.createProduct.js';
import getProducts from '../controllers/ctl.getProducts.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);

export default router;
