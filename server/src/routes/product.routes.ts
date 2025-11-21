import express from 'express';
import { getProducts, addProduct, deleteProduct } from '../controllers/';
const router = express.Router();

router.get('/', getProducts)
router.post('/', addProduct)
router.delete('/:productId', deleteProduct)
  
export default router;
