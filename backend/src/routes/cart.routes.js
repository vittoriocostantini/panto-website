import { Router } from 'express';
import {
  getCart,
  addToCart,
  updateItemQuantity,
  removeFromCart,
  merge
} from '../controllers/cart.controller.js';

const router = Router();
router.get('/', getCart);
router.post('/', addToCart);
router.post('/merge', merge);
router.put('/:productId', updateItemQuantity);
router.delete('/:productId', removeFromCart);

export default router;
