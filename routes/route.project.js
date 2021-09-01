import express from 'express';
import createProduct from '../controllers/ctl.createProduct.js';

const router = express.Router();

router.get('/', createProduct);

export default router;