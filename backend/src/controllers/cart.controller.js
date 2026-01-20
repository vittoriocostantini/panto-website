import { cartService } from '../services/cart.service.js';
import { eventBus } from '../utils/event.js';

export const getCart = async (req, res) => {
  try {
    const { userId, guestId } = req.query;
    const cart = await cartService.getCart(userId, guestId);
    res.json(cart); // Devuelve { userId, items: [...] }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { userId, guestId, product } = req.body;
    const cart = await cartService.addItem(userId, guestId, product);
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateItemQuantity = async (req, res) => {
  try {
    const { productId } = req.params;
    const { userId, guestId, delta } = req.body;
    const cart = await cartService.updateQuantity(userId, guestId, productId, delta);
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const { userId, guestId } = req.body;
    const cart = await cartService.removeItem(userId, guestId, productId);
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const merge = async (req, res) => {
  try {
    const { guestId, userId } = req.body;

    // El Observer se encarga de la fusión en background
    eventBus.emit('AUTH_LOGIN_SUCCESS', { guestId, userId });

    // Respondemos con el carrito actual del usuario (mientras el merge sucede)
    const cart = await cartService.getCart(userId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
